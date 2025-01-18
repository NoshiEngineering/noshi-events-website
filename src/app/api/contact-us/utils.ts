import { EventType } from "@/models/enquiry";
import NewsLetter from "@/models/newsLetter"; // Import the NewsLetter model
import { INewsLetterCreation } from "./interface";
import dbConnection from "@/dbConfig/dbConfig";
import { sendEmail } from "../../../../services/emailer";

export const newsLetterCreation = async ({
  email,
  newsLetterSubscription,
}: INewsLetterCreation) => {
  try {
    await dbConnection();
    const newsLetter = await NewsLetter.findOne({ email });
    if (newsLetter && newsLetterSubscription) {
      newsLetter.subscribed = true;
      await newsLetter.save();
    } else {
      await NewsLetter.create({
        email,
        subscribed: newsLetterSubscription,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const mapEventType = (type: string): EventType | string => {
  const normalizedType = type.replace(/event$/i, "").trim();
  // return Object.values(EventType).includes(normalizedType as EventType)
  //   ? (normalizedType as EventType)
  //   : "";
  return normalizedType;
};

export const sendEnquiryToTeam = async (data: {
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
    "engineering@noshievents.com",
    "marketing@noshievents.com",
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

export const sendMessageToClient = async (data: {
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
    <p><b>The Noshi Events Team</b>
        <br>
        <a href="http://www.noshievents.com">www.noshievents.com</a>
        <br>
        +919373090013
    </p>
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
