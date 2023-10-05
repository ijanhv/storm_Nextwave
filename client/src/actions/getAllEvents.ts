import prisma from "@/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getAllEvents() {
  try {
    // const currentUser = await getCurrentUser();

    // if (!currentUser) {
    //   return [];
    // }

    const events = await prisma.event.findMany()

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
