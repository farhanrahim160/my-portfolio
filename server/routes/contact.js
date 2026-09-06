import express from "express";
import { Resend } from "resend";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "farhanrahim160@gmail.com",
      reply_to: email,
      subject: "New message from " + name + " (Portfolio)",
      html: "<p><strong>Name:</strong> " + name + "</p><p><strong>Email:</strong> " + email + "</p><p><strong>Message:</strong> " + message + "</p>"
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

export default router;
