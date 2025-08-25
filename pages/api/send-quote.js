// /pages/api/send-quote.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { name, email, phone, moveType, moveDate, details } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true, // must be true for port 465
            auth: {
                user: process.env.SMTP_USER, // e.g. "quote@tynemove.co.uk"
                pass: process.env.SMTP_PASS, // your Hostinger email password
            },
        });

        await transporter.sendMail({
            from: `"TyneMove Quotes" <${process.env.SMTP_USER}>`,
            to: "quote@tynemove.co.uk", // could also forward to another email if needed
            subject: "New Quote Request",
            html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Move Type:</strong> ${moveType}</p>
        <p><strong>Move Date:</strong> ${moveDate}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
        });

        res.status(200).json({ message: "✅ Quote request sent successfully!" });
    } catch (err) {
        console.error("Email error:", err);
        res.status(500).json({ message: "❌ Failed to send email.", error: err.message });
    }
}
