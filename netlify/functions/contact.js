import nodemailer from 'nodemailer';

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'OWNER_EMAIL'];

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const badRequest = (message) => ({
    statusCode: 400,
    headers: defaultHeaders,
    body: JSON.stringify({ error: message }),
});

const serverError = (message) => ({
    statusCode: 500,
    headers: defaultHeaders,
    body: JSON.stringify({ error: message }),
});

export async function handler(event) {
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: defaultHeaders,
            body: JSON.stringify({ ok: true }),
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: defaultHeaders,
            body: JSON.stringify({ error: 'Method not allowed.' }),
        };
    }

    const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
    if (missing.length) {
        return serverError(`Missing required env vars: ${missing.join(', ')}`);
    }

    let payload;
    try {
        payload = JSON.parse(event.body || '{}');
    } catch {
        return badRequest('Invalid JSON payload.');
    }

    const { name, email, phone, subject, budget, message } = payload;
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return badRequest('Name, email, and message are required.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return badRequest('Invalid email address.');
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const resolvedSubject = subject || 'General Inquiry';
    const resolvedBudget = budget || 'Not specified';
    const firstName = name.split(' ')[0];

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.OWNER_EMAIL,
            replyTo: email,
            subject: `[${resolvedSubject}] New message from ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone || 'Not provided'}`,
                `Subject: ${resolvedSubject}`,
                `Budget: ${resolvedBudget}`,
                '',
                message,
            ].join('\n'),
        });

        await transporter.sendMail({
            from: `"Atharva Chaphe" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${firstName}!`,
            text: `Hi ${firstName},\n\nThanks for your message about "${resolvedSubject}". I have received it and will get back to you soon.\n\n- Atharva`,
        });

        return {
            statusCode: 200,
            headers: defaultHeaders,
            body: JSON.stringify({ success: true }),
        };
    } catch (err) {
        return serverError(err?.message || 'Failed to send email. Please try again.');
    }
}
