import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
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
      rating,
      bookingStatus,
      specialRequirements,
    },
  });

  

  return NextResponse.json(newService);
}
