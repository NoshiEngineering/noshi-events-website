import { NextRequest, NextResponse } from "next/server";
import Enquiry from "@/models/enquiry"; // Ensure to import Enquiry model
import { mapEventType, newsLetterCreation } from "./utils";
import dbConnection from "@/dbConfig/dbConfig";
import { sendEmail } from "../../../../services/emailer";

dbConnection();

const sendEnquiryToTeam = async (data: {
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  reachOutOnWhatsApp?: boolean;
  eventType: string;
  newsLetterSubscription?: boolean;
}) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    reachOutOnWhatsApp,
    eventType,
    newsLetterSubscription,
  } = data;

  const recipients = [
    "sharmad@noshievents.com",
    "pramit@noshievents.com",
    "gamzzclashh57@gmail.com",
  ];

  const template = `<p>You have received a new enquiry:</p>
    <ul>
      <li><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${phone}</li>
      <li><strong>WhatsApp:</strong> ${reachOutOnWhatsApp ? "Yes" : "No"}</li>
      <li><strong>Event Type:</strong> ${mapEventType(eventType)}</li>
      <li><strong>Newsletter Subscription:</strong> ${
        newsLetterSubscription ? "Subscribed" : "Not Subscribed"
      }</li>
    </ul>`;

  await sendEmail(
    {
      from: process.env.NODEMAILER_AUTH_USER,
      to: recipients,
      subject: "New Enquiry Received",
    },
    template
  );
};

const sendMessageToClient = async (data: {
  fullName: string;
  email: string;
}) => {
  const { fullName, email } = data;

  const template = `
    <html>
      <p>Dear ${fullName},</p>
      <p>Thank you for reaching out to Noshi Events!</p>
      <p>We have successfully received your enquiry and truly appreciate your interest in our services. Our team is reviewing your request, and one of our agents will get in touch with you within the next 2 hours to discuss how we can make your event truly memorable.</p>
      <p>If you have any urgent questions, feel free to contact us at <b>+919373090013</b> or email us at <b>marketing@noshievents.com</b>.</p>
      <p>We look forward to connecting with you soon!</p>
      <p>Warm regards,</p>
      <p><b>The Noshi Events Team</b></p>
      <p><a href="http://www.noshievents.com">www.noshievents.com</a></p>
      <p>Contact Number: +919373090013</p>
    </html>
  `;

  await sendEmail(
    {
      from: process.env.NODEMAILER_AUTH_USER,
      to: email,
      subject: "Thank You for Your Enquiry - We’ll Be in Touch Soon!",
    },
    template
  );
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, newsLetterSubscription, phone } = body;
    if (!email)
      return NextResponse.json(
        {
          message: "email is required",
        },
        { status: 400 }
      );
    if (!phone)
      return NextResponse.json(
        {
          message: "email is required",
        },
        { status: 400 }
      );

    await Enquiry.create({
      firstName: body.firstName,
      lastName: body.lastName,
      fullName:
        body?.firstName && body?.lastName
          ? body.firstName + " " + body.lastName
          : "",
      email: body.email,
      phone: body.phone,
      reachOutOnWhatsApp: body.reachOutOnWhatsApp,
      eventType: mapEventType(body.eventType.toString()),
      newsLetterSubscription: newsLetterSubscription,
    });

    if (newsLetterSubscription)
      await newsLetterCreation({
        email: body.email.toString(),
        newsLetterSubscription: true,
      });
    else
      await newsLetterCreation({
        email: body.email.toString(),
        newsLetterSubscription: false,
      });

    await sendEnquiryToTeam({
      firstName: body.firstName,
      lastName: body.lastName,
      email,
      phone,
      reachOutOnWhatsApp: body.reachOutOnWhatsApp,
      eventType: body.eventType,
      newsLetterSubscription,
    });

    await sendMessageToClient({
      fullName:
        body?.firstName && body?.lastName
          ? body.firstName + " " + body.lastName
          : "",
      email: body.email,
    });

    return NextResponse.json(
      { message: "Thank you for submitting. Our team will reach you soon!!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
