// server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS length:", process.env.MAIL_PASS && process.env.MAIL_PASS.length);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- check env values ---
if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error("❌ MAIL_USER or MAIL_PASS missing in .env");
}

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER, // your Gmail
    pass: process.env.MAIL_PASS, // Gmail app password
  },
});

// optional: verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Nodemailer verify error:", error);
  } else {
    console.log("✅ Nodemailer is ready to send emails");
  }
});

app.post("/send", (req, res) => {
  const { email, subject, message } = req.body;
  console.log("Incoming /send:", { email, subject });

  if (!email || !subject || !message) {
    return res.status(400).send("Missing fields");
  }

  const mailOptions = {
    from: process.env.MAIL_USER,           // sender (your Gmail)
    replyTo: email,                        // visitor's email
    to: process.env.MAIL_USER,            // where you receive
    subject,
    text: `From: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).send("Error sending email");
    } else {
      console.log("✅ Email sent:", info.response);
      return res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
