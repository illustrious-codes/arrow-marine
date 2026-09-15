import nodemailer from "nodemailer";

const RECIPIENTS = [
  "ops@arrowmarinelimited.com",
  "mgmt@arrowmarinelimited.com",
];

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ArrowMarine Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENTS,
      replyTo: email,
      subject: `New enquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${
        phone || "—"
      }\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return Response.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
