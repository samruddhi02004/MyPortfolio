import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const {
  PORT = "3001",
  ALLOWED_ORIGINS = "http://localhost:5173",
  TO_EMAIL,
  SMTP_HOST,
  SMTP_PORT = "465",
  SMTP_SECURE = "true",
  SMTP_USER,
  SMTP_PASS,
  FROM_NAME = "Portfolio Contact",
} = process.env;

if (!TO_EMAIL) throw new Error("Missing TO_EMAIL in server/.env");
if (!SMTP_HOST) throw new Error("Missing SMTP_HOST in server/.env");
if (!SMTP_USER) throw new Error("Missing SMTP_USER in server/.env");
if (!SMTP_PASS) throw new Error("Missing SMTP_PASS in server/.env");

const allowedOrigins = ALLOWED_ORIGINS.split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const app = express();

app.use(helmet());
app.use(express.json({ limit: "50kb" }));
app.use(
  cors({
    origin(origin, cb) {
      if (!origin) return cb(null, true); // curl/postman
      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error("Not allowed by CORS"));
    },
  })
);

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: String(SMTP_SECURE).toLowerCase() === "true",
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return res.status(400).json({ ok: false, error: "Name is required" });
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({ ok: false, error: "Valid email is required" });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return res.status(400).json({ ok: false, error: "Message is required" });
    }

    const safeName = name.trim().slice(0, 120);
    const safeEmail = email.trim().slice(0, 200);
    const safeMessage = message.trim().slice(0, 4000);

    const subject = `New portfolio message from ${safeName}`;

    const text = [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      "",
      safeMessage,
    ].join("\n");

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: safeEmail,
      subject,
      text,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

app.listen(Number(PORT), () => {
  console.log(`Mailer server running on http://localhost:${PORT}`);
});

