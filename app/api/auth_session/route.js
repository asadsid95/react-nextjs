import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {

  cookies().set("hello", "ummmm");
    cookies().
  try {
    const data = await req.json();

    console.log(data);
    return NextResponse.json({ message: "success" }, { data });
  } catch (err) {
    console.log("[SERVER_ERROR]", err);
  }
}
