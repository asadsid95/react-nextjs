import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// function prismaClient() {
//   const prisma = new PrismaClient();

//   return prisma;
// }

export const db = new PrismaClient();

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const createUser = await db.users.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });

    return NextResponse.json(createUser);
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  console.log("hello");
  return new Response();
}
