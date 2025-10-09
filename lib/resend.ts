"use server"


import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async ({
    name,
    email,
    message,
}: {
    name: string;
    email: string;
    message: string;
}) => {
    try {
        await resend.emails.send({
            to: "chacchankhongphainhan313@gmail.com",
            from: "  Test <onboarding@resend.dev>",
            subject: `New message from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>📩 New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
        })
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}