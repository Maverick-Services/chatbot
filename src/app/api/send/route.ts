// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        const data = await resend.emails.send({
            from: 'AVA AI Chatbot <testing@resend.dev>',
            to: 'maverick.aiproject@gmail.com',
            subject: `New Inquiry from ${name} - AVA AI Chatbot`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h1 style="color: #2563eb; text-align: center;">New Customer Inquiry</h1>
          
          <div style="margin-top: 20px; background-color: #f8fafc; padding: 15px; border-radius: 8px;">
            <p><strong style="color: #334155;">Name:</strong> ${name}</p>
            <p><strong style="color: #334155;">Email:</strong> ${email}</p>
            <p><strong style="color: #334155;">Phone:</strong> ${phone}</p>
            <p><strong style="color: #334155;">Message:</strong></p>
            <p style="background-color: #f1f5f9; padding: 10px; border-radius: 4px; margin-top: 5px;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #64748b; font-size: 14px;">
            <p>This inquiry was submitted through the AVA AI Chatbot landing page.</p>
          </div>
        </div>
      `,
        });

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}