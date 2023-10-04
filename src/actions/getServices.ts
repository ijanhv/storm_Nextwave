import prisma from "@/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getServices() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const services = await prisma.vendor.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    return services;
  } catch (error: any) {
    throw new Error(error);
  }
}
