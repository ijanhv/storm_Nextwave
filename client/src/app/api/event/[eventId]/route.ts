import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { eventId } = params;

  const service = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  return NextResponse.json(service);
}

// UPDATE

export async function PUT(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { eventId } = params;

  const body = await request.json();

  const service = prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  const updatedService = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedService);
}

// DELETE

export async function DELETE(
  request: Request,
  { params }: { params: { eventId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { eventId } = params;

  const service = prisma.event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  const deletedService = await prisma.event.delete({
    where: {
      id: eventId,
    },
  });

  return NextResponse.json(deletedService);
}
