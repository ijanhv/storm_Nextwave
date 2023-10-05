import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  // if (!currentUser) {
  //   return NextResponse.error();
  // }

  const body = await request.json();
  console.log(body);
  const { name, email, phone } = body;

  const speaker = await prisma.speaker.create({
    data: {
      name,
      email,
      phone,
    },
  });
  console.log("speaker",speaker);

  return NextResponse.json(speaker);
}
