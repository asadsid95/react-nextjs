import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// function prismaClient() {
//   const prisma = new PrismaClient();

//   return prisma;
// }

// how to check for multiple client instances
export const db = new PrismaClient();

export async function POST(req) {
  let { username, email, password } = await req.json();

  // generate salt and then hash
  let salt = await bcrypt.genSalt(10);
  // console.log(salt);
  // let hashedUsername = await bcrypt.hash(username, salt);
  let hashedPassword = await bcrypt.hash(password, salt);

  // check if user exists; username is now encrypted
  const isUserCreated = await db.users.findFirst({
    where: {
      username: username,
    },
  });

  if (isUserCreated) {
    return NextResponse.json(
      { message: "User is already created" },
      { status: 409 }
    );
  }

  // create new user
  try {
    const createUser = await db.users.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(createUser);
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function GET() {
  console.log("from GET");
  return new Response();
}
