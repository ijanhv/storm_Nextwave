import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { serviceId: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { serviceId } = params;

  const service = await prisma.vendor.findUnique({
    where: {
      id: serviceId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  return NextResponse.json(service);
}

export async function PUT(
  request: Request,
  { params }: { params: { serviceId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { serviceId } = params;

  const body = await request.json();

  const service = prisma.vendor.findUnique({
    where: {
      id: serviceId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  const updatedService = await prisma.vendor.update({
    where: {
      id: serviceId,
    },
    data: {
        ...body,
      },
    });

  return NextResponse.json(updatedService);
}

export async function DELETE(
  request: Request,
  { params }: { params: { serviceId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { serviceId } = params;

  const service = prisma.vendor.findUnique({
    where: {
      id: serviceId,
    },
  });

  if (!service) {
    return NextResponse.error();
  }

  const deletedService = await prisma.vendor.delete({
    where: {
      id: serviceId,
    },
  });

  return NextResponse.json(deletedService);
}