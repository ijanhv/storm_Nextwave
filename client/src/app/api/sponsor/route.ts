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
  const { companyName, companyEmail, amount, description } = body;

  const sponsor = await prisma.sponsor.create({
    data: {
        companyName,
        companyEmail,
        amount,
        description,
    },
  });
  console.log("sponsor",sponsor);

  return NextResponse.json(sponsor);
}
