import React, { useState } from "react";
import "./Pages.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!res.ok) {
        alert("Failed to send email. Please try again.");
        return;
      }

      alert("Message sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="app-bg">
      <section className="contact">
        <h3>Get in Touch</h3>
        <p className="contact-text">
          Have a question or want to work together? Feel free to reach out by filling the form below.
        </p>

        <div className="form-wrapper">
          <form className="form-design" onSubmit={handleSubmit}>
            <label htmlFor="email">Mail</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit" className="primary-btn">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
