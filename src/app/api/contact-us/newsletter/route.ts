import { NextRequest, NextResponse } from "next/server";
import { newsLetterCreation } from "../utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await newsLetterCreation({
      email: body.email,
      newsLetterSubscription: body.subscription,
    });
    return NextResponse.json(
      {
        message: "You are subscribed to Noshi Events",
      },
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
