import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { BookingStatus } from "@prisma/client";
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
    contactPerson,
    email,
    userId,
    phone,
    category,
    location,
    description,
    pricing,
    rating,
    bookingStatus,
    specialRequirements,
  } = body;

  const user = prisma.user.findUnique({
    where: {
      id: currentUser.id,
    },
  });

  if (!user) {
    return NextResponse.error();
  }

  const newService = await prisma.vendor.create({
    data: {
      name,
      userId,
      contactPerson,
      email,
      phone,
      category,
      location,
      description,
      pricing,
      rating : 0,
      bookingStatus: BookingStatus.Available,
      specialRequirements,
    },
  });

  return NextResponse.json(newService);
}


// GET ALL SERVICES

export async function GET() {
  const services = await prisma.vendor.findMany();
  return NextResponse.json(services);
}
