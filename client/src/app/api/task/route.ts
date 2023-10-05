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
  const { name, dueDate, completed, eventId } = body;

  const task = await prisma.task.create({
    data: {
       name,
       dueDate,
       completed,
       eventId
    },
  });
  console.log("task",task);

  return NextResponse.json(task);
}
