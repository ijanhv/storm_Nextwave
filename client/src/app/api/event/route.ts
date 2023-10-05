

import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  console.log(body);
  const {
    name,
    eventType,
    startDate,
    endDate,
    location,
    description,
    budget,
    organizerId,
    numberOfTickets,
    ticketId,
    status
  } = body;

  const user = prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
  });

  if (!user) {
    return NextResponse.error();
  }

  const newEvent = await prisma.event.create({
    data: {
      name,
      eventType,
      startDate,
      endDate,
      location,
      description,
      budget,
      organizerId,
      numberOfTickets,
      ticketId,
      status
    },
  });

  return NextResponse.json(newEvent);
}

// GET ALL EVENTs
export async function GET() {
  const services = await prisma.event.findMany();
  return NextResponse.json(services);
}
