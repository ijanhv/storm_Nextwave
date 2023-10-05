import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { taskId: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { taskId } = params;

  const task = await prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    return NextResponse.error();
  }

  return NextResponse.json(task);
}

// UPDATE

export async function PUT(
  request: Request,
  { params }: { params: { taskId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { taskId } = params;

  const body = await request.json();

  const task = prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    return NextResponse.error();
  }

  const updatedService = await prisma.event.update({
    where: {
      id: taskId,
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
  { params }: { params: { taskId: string } }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { taskId } = params;

  const task = prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });

  if (!task) {
    return NextResponse.error();
  }

  const deletedService = await prisma.event.delete({
    where: {
      id: taskId,
    },
  });

  return NextResponse.json(deletedService);
}
