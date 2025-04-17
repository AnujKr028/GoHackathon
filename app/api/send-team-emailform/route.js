import { Resend } from "resend"; 


const resend = new Resend(process.env.RESEND_API_KEY); 

export async function POST(req) { 
    try { 
        const body = await req.json() ; 
        const {name, email , role , team} = body ;  

        const data = await resend.emails.send({ 
            from: 'anujkr028<onboarding@resend.dev>',
            to: 'anujkr028@gmail.com',
      subject: 'New Team Registration',
      html: `
        <h2>New Participant Registration</h2>
        <p><strong>Participant name:</strong> ${name}</p>
        <p><strong>Participant email:</strong> ${email}</p>
        <p><strong>Participant role:</strong> ${role} developer</p>
        <p><strong>Team wanted to join:</strong> ${team}</p>
      `,
        }) ; 

        return Response.json({ success: true});
    } 
    catch(error) { 
        console.error("Email sending failed:",error); 
        return Response.json({ success: false, error: error.message }, { status: 500 });
    
    }
}