import { NextRequest, NextResponse } from "next/server";
import Enquiry from "@/models/enquiry"; // Ensure to import Enquiry model
import NewsLetter from "@/models/newsLetter"; // Ensure to import NewsLetter model
import { newsLetterCreation } from "./utils";
import dbConnection from "@/dbConfig/dbConfig";

dbConnection();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.formData();
    const body = Object.fromEntries(Array.from(reqBody.entries()));

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

    const contact = await Enquiry.create({
      firstName: body.firstName,
      lastName: body.lastName,
      fullName:
        body?.firstName && body?.lastName
          ? body.firstName + " " + body.lastName
          : "",
      email: body.email,
      phone: body.phone,
      reachOutOnWhatsApp: body.reachOutOnWhatsApp === "true",
      // eventType: body.eventType,
      newsLetterSubscription: newsLetterSubscription === "true",
    });

    console.log(contact);

    // if (newsLetterSubscription === "true")
    //   await newsLetterCreation(body.email.toString(), true);
    // // Subscribe to newsletter
    // else await newsLetterCreation(body.email.toString(), false); // Unsubscribe from newsletter

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
