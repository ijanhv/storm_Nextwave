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
    category,
    location,
    description,
    budget,
    organizerId,
    numberOfTickets,
    ticketId,
    status,
    speakerName,
    speakerEmail,
    speakerPhone,
    sponsorCompanyName,
    sponsorCompanyEmail,
    sponsorAmount,
    sponsorDescription,
    ticketName,
    ticketPrice,
  } = body;

  const user = prisma.user.findUnique({
    where: {
      id: currentUser?.id,
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
      category: eventType,
      description,
      budget,
      organizerId,
      numberOfTickets : 100,
      ticketId,
      status: "Upcoming",
      speaker: {
        create: {
          name: speakerName,
          email: speakerEmail,
          phone: "1234567890",
        },
      },
      sponsor: {
        create: {
          companyName: sponsorCompanyName,
          companyEmail: sponsorCompanyEmail,
          amount: sponsorAmount,
          description: sponsorDescription,
        },
      },
      tickets: {
        create: {
          name: ticketName,
          price: parseFloat(ticketPrice),
          organizerId: currentUser?.id,
        },
      },
    },
  });

  return NextResponse.json(newEvent);
}

// GET ALL EVENTs
export async function GET() {
  const services = await prisma.event.findMany();
  return NextResponse.json(services);
}
