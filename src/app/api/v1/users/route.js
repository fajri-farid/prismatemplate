import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const bio = searchParams.get("bio");
  const ageQuery = searchParams.get("age"); //string
  const age = Number(ageQuery); // number

  //   console.log(bio);

  // logic get by bio
  if (bio || age) {
    const allUser = await prisma.users.findMany({
      where: {
        OR: [
          {
            bio: {
              contains: bio,
            },
          },
          {
            age,
          },
        ],
      },
    });
    return NextResponse.json({
      message: "get all user by bio succes!",
      data: allUser,
    });
  }

  // business logic
  // logic get by all
  const allUser = await prisma.users.findMany();
  return NextResponse.json({ message: "get all user succes!", data: allUser });
}

// POST

export async function POST(req) {
  const { name, email, password } = await req.json();

  // bikin logic untuk insert ke database
  const createuser = await prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });

  return NextResponse.json(
    { message: "register succes!", data: createuser },
    { status: 201 }
  );
}
