
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const data = await resend.emails.send({
      from: 'anujkr028<onboarding@resend.dev>',
      to: 'anujkr028@gmail.com',
      subject: 'New Hackathon Request',
      html: `
        <h2>New Hackathon Request</h2> 
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p> 
        <p><strong>Organisation:</strong> ${body.organisation}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
