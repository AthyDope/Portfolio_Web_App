import nodemailer from 'nodemailer';

const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'OWNER_EMAIL'];

const send = (res, status, body) => res.status(status).json(body);

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        return send(res, 200, { ok: true });
    }

    if (req.method !== 'POST') {
        return send(res, 405, { error: 'Method not allowed.' });
    }

    const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
    if (missing.length) {
        return send(res, 500, { error: `Missing required env vars: ${missing.join(', ')}` });
    }

    const payload = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { name, email, phone, subject, budget, message } = payload;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return send(res, 400, { error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return send(res, 400, { error: 'Invalid email address.' });
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

        return send(res, 200, { success: true });
    } catch (err) {
        return send(res, 500, { error: err?.message || 'Failed to send email. Please try again.' });
    }
}

