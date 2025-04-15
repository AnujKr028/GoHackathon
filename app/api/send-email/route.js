import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log("Received body:", body); // Debug log

  try {import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log("Received body:", body); // Debug log

  try {
    const data = await resend.emails.send({
      from: "Anuj <onboarding@resend.dev>",
      to: "anujkr028@gmail.com",
      subject: "New Hackathon Request",
      html: `
        <h2>New Hackathon Request</h2> 
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p> 
        <p><strong>Organisation:</strong> ${body.organisation}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending failed:", error); // Log errors
    return Response.json({ success: false, error });
  }
}

    const data = await resend.emails.send({
      from: "anujkr028<onboarding@resend.dev>",
      to: "anujkr028@gmail.com",
      subject: "New Hackathon Request",
      html: `
        <h2>New Hackathon Request</h2> 
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p> 
        <p><strong>Organisation:</strong> ${body.organisation}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Email sending failed:", error); // Log errors
    return Response.json({ success: false, error });
  }
}
