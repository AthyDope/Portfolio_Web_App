import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    methods: ['POST'],
}));

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

transporter.verify((err) => {
    if (err) console.error('SMTP connection error:', err.message);
    else console.log('✅ SMTP server ready — mails will be sent from', process.env.SMTP_USER);
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, budget, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    const timestamp = new Date().toLocaleString('en-IN', {
        dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Kolkata',
    });

    const resolvedSubject = subject || 'General Inquiry';
    const resolvedBudget = budget || 'Not specified';
    const firstName = name.split(' ')[0];

    try {
        // ── 1. Mail to YOU (Atharva) ──────────────────────────────────────
        await transporter.sendMail({
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.OWNER_EMAIL,
            replyTo: email,
            subject: `📬 [${resolvedSubject}] New message from ${name}`,
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:16px;overflow:hidden;border:1px solid #1e293b;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:32px 40px;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">📬 New Portfolio Inquiry</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">${timestamp}</p>
          </td>
        </tr>

        <!-- Sender Details -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #334155;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">From</p>
                  <p style="margin:4px 0 0;color:#f1f5f9;font-size:16px;font-weight:700;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #334155;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Email</p>
                  <a href="mailto:${email}" style="display:block;margin:4px 0 0;color:#60a5fa;font-size:15px;font-weight:600;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 24px;border-bottom:1px solid #334155;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Subject / Category</p>
                  <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${resolvedSubject}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Project Budget</p>
                  <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${resolvedBudget}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Message Body -->
        <tr>
          <td style="padding:24px 40px 0;">
            <p style="margin:0 0 12px;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Message</p>
            <div style="background:#1e293b;border-left:4px solid #3b82f6;border-radius:0 12px 12px 0;padding:20px 24px;">
              <p style="margin:0;color:#cbd5e1;font-size:15px;line-height:1.8;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
          </td>
        </tr>

        <!-- Reply CTA -->
        <tr>
          <td style="padding:32px 40px;">
            <a href="mailto:${email}?subject=Re: ${resolvedSubject}"
               style="display:inline-block;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;text-decoration:none;padding:14px 28px;border-radius:10px;font-weight:700;font-size:14px;">
              ↩ Reply to ${firstName}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #1e293b;">
            <p style="margin:0;color:#334155;font-size:12px;">Sent via your portfolio contact form · atharvachaphe.dev</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });

        // ── 2. Auto-reply to the USER ─────────────────────────────────────
        await transporter.sendMail({
            from: `"Atharva Chaphe" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${firstName}! I'll be in touch soon 🙌`,
            html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:16px;overflow:hidden;border:1px solid #1e293b;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d4ed8,#4f46e5);padding:40px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;letter-spacing:-0.5px;">Message Received! 🎉</h1>
            <p style="margin:10px 0 0;color:rgba(255,255,255,0.8);font-size:15px;">I'll get back to you within 48 working hours.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 16px;color:#cbd5e1;font-size:16px;line-height:1.7;">Hi <strong style="color:#fff;">${firstName}</strong>,</p>
            <p style="margin:0 0 16px;color:#94a3b8;font-size:15px;line-height:1.8;">
              Thanks for getting in touch! I've received your message regarding
              <strong style="color:#60a5fa;">${resolvedSubject}</strong> and will review it shortly.
            </p>
            <p style="margin:0 0 28px;color:#94a3b8;font-size:15px;line-height:1.8;">
              In the meantime, feel free to check out my work or connect with me on LinkedIn.
            </p>

            <!-- Message recap -->
            <div style="background:#1e293b;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
              <p style="margin:0 0 10px;color:#64748b;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Your message</p>
              <p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.8;">${message.replace(/\n/g, '<br/>')}</p>
            </div>

            <!-- CTA buttons -->
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="https://github.com/AthyDope"
                     style="display:inline-block;background:#1e293b;color:#e2e8f0;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;font-size:13px;border:1px solid #334155;">
                    🔗 GitHub
                  </a>
                </td>
                <td>
                  <a href="https://www.linkedin.com/in/atharva-chaphe-65545b234/"
                     style="display:inline-block;background:#1e293b;color:#e2e8f0;text-decoration:none;padding:12px 22px;border-radius:10px;font-weight:600;font-size:13px;border:1px solid #334155;">
                    💼 LinkedIn
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Signature -->
        <tr>
          <td style="padding:0 40px 40px;">
            <p style="margin:0;color:#94a3b8;font-size:14px;line-height:1.8;">
              Cheers,<br/>
              <strong style="color:#fff;font-size:16px;">Atharva Chaphe</strong><br/>
              <span style="color:#60a5fa;font-size:13px;">Full Stack Developer · Pune, India</span>
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #1e293b;text-align:center;">
            <p style="margin:0;color:#334155;font-size:12px;">
              You're receiving this because you submitted the contact form at atharvachaphe.dev.<br/>
              This is an automated reply — please don't reply to this email directly.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Email send error:', err.message);
        res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
