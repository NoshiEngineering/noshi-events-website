/* eslint-disable @typescript-eslint/no-explicit-any */
import { getMailTransporter } from "@/utils/nodeMailerConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;
    if (!email)
      return NextResponse.json(
        {
          message: "email is required",
        },
        { status: 400 }
      );

    const transporter = getMailTransporter();

    const mailOptions = {
      from: process.env.NODEMAILER_AUTH_USER,
      to: email,
      subject: "Hello from Noshi Events!",
      html: `<p>Hello! 👋</p>
               <p>We just wanted to say hi and hope you have a great day!</p>
               <p>Cheers,</p>`,
    };

    const response = await transporter.sendMail(mailOptions);

    console.log(response);
    return NextResponse.json(
      { message: "Thank you for submitting. Our team will reach you soon !!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
