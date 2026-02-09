
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { type, name, email, phone, message, company, details, role, attachments } = req.body;

        let subject = '';
        let htmlContent = '';

        if (type === 'quote') {
            subject = `New Quote Request from ${name} at ${company}`;
            htmlContent = `
                <h2>New Quote Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Details/Requirements:</strong></p>
                <p>${details}</p>
            `;
        } else if (type === 'career') {
            subject = `New Job Application: ${role} - ${name}`;
            htmlContent = `
                <h2>New Job Application</h2>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `;
        } else {
            // Default contact form
            subject = `New Contact Form Submission from ${name}`;
            htmlContent = `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `;
        }

        const emailData = {
            from: 'onboarding@resend.dev',
            to: 'nuvoautotech01@gmail.com',
            subject: subject,
            html: htmlContent,
            attachments: (attachments || []).map(att => ({
                filename: att.filename,
                content: Buffer.from(att.content, 'base64')
            }))
        };

        const { data, error } = await resend.emails.send(emailData);

        if (error) {
            console.error('Error sending email:', error);
            return res.status(400).json({ error });
        }

        res.status(200).json({ message: 'Email sent successfully', data });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
