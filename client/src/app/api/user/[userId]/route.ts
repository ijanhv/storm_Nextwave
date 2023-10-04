import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const currentUser = await getCurrentUser();

  const body = await request.json();
  console.log(body);

  if (!currentUser) {
    return NextResponse.error();
  }

  const { userId } = params;

  const user = prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return NextResponse.error();
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedUser);
}
