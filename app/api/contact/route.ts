import { NextRequest } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { from_name: name, from_email: email, message },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY!, privateKey: process.env.EMAILJS_PRIVATE_KEY! }
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
  }
}