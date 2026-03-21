// EmailJS Configuration
// Follow these steps to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail) and verify your email
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{message}} - the message content
//    - {{reply_to}} - sender's email for replies
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_zp6ph0x',      // Your EmailJS Service ID
    TEMPLATE_ID: 'template_cqcle4s',    // Your EmailJS Template ID
    PUBLIC_KEY: '9N2pa237gGsnuBfwe'     // Your EmailJS Public Key
};

// Example template for EmailJS:
// Subject: New Contact Form Submission from {{from_name}}
//
// You have received a new message from your portfolio contact form:
//
// Name: {{from_name}}
// Email: {{from_email}}
// Time: {{sent_time}}
//
// Message:
// {{message}}
//
// ---
// Reply to: {{reply_to}}
