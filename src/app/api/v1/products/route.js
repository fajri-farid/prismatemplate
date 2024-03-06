import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  // handling request
  const searchParams = req.nextUrl.searchParams;
  const minP = searchParams.get("minP");
  const maxP = searchParams.get("maxP");

  // handling logic
  const getProductsByPrice = await prisma.products.findMany({
    where: {
      price: {
        gte: Number(minP), //greater than equal
        lte: Number(maxP), // less than equal
      },
    },
  });

  //handling response
  return NextResponse.json({
    message: "get all products",
    data: getProductsByPrice,
  });
}
