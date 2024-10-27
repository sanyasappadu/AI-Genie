import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();
export const POST = async (req: Request) => {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("You are not authenticated", { status: 401 });
    }

    if (!openai.apiKey) {
      console.log("error");
      return new NextResponse("Openai key is not configured", { status: 500 });
    }

    if (!messages) {
      console.log("messages are requred");
      return new NextResponse("Messages are requred", { status: 400 });
    }

    const resonse = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });
    return NextResponse.json(resonse.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("[CONVERSATION_ERROR]",error);
    return new NextResponse("Internel server error", { status: 500 });
  }
};