import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";
require("dns").setDefaultResultOrder("ipv4first"); // Force IPv4 connection

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 600, // Per 10 minutes
});

export async function POST(request) {
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

  try {
    await rateLimiter.consume(ip); // Rate limiting per IP
  } catch (err) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create the transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Use Gmail's SMTP server
      port: 587, // Port 587 for TLS
      secure: false, // Use TLS (true for SSL, false for TLS)
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Your Gmail app password (NOT regular password)
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // Sender's email
      to: process.env.YOUR_EMAIL, // Recipient's email (could be your own)
      subject: `New message from ${name}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body content
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
