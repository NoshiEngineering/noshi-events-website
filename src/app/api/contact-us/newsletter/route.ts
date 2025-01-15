import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log(body);
  try {
    const body = await request.json();
    
    console.log(body, "body");
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
