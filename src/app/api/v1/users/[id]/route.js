import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  // handling request
  const userId = params.id;

  //handling logic
  const userData = await prisma.users.findFirst({
    where: {
      id: userId,
    },
  });

  //handling response
  return NextResponse.json({
    message: "get user by id success",
    data: userData,
  });
}

export async function PATCH(req, { params }) {
  // handling request
  const userId = params.id;
  const { name, bio, password } = await req.json();

  //handling logic
  const updateData = await prisma.users.update({
    where: {
      id: userId,
    },
    data: {
      name,
      password,
      bio,
    },
  });

  // handling response
  return NextResponse.json({
    message: "Update user success",
    data: updateData,
  });
}
