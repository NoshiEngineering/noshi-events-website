import { NextRequest, NextResponse } from "next/server";
import Enquiry from "@/models/enquiry"; // Ensure to import Enquiry model
import { mapEventType, newsLetterCreation } from "./utils";
import dbConnection from "@/dbConfig/dbConfig";

dbConnection();

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
