import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Check if it's a POST request
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'bacayjhoshuajm@gmail.com',
            pass: 'gcghhjghf012003', // Use environment variables for sensitive data
        },
    });

    // Send email
    try {
        await transporter.sendMail({
            from: '"Contact Form" <bacayjhoshuajm@gmail.com>',
            to: 'bacayjhoshuajm@gmail.com',
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message}</p>
            `,
        });
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to send message. Error: ' + error.message });
    }
}