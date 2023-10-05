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
  const { name, price, eventId, organizerId } = body;

  const ticket = await prisma.ticket.create({
    data: {
        name,
        price,
        eventId,
        organizerId,
    },
  });
  console.log("ticket",ticket);

  return NextResponse.json(ticket);
}
