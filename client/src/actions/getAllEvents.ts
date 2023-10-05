import prisma from "@/lib/prismadb";

export default async function getAllEvents() {
  try {
    // const currentUser = await getCurrentUser();

    // if (!currentUser) {
    //   return [];
    // }

    const events = await prisma.event.findMany({
      include: {
        speaker: true,
        sponsor:  true,
        ticket: true,
      
      },
 
    });



    if (events.length === 0 || !events) {
      return [];
    }

    const eventsWithISODate = events.map((event) => ({
      ...event,
      startDate: event.startDate.toString(),
      endDate: event.endDate.toString(),
    }));

    return eventsWithISODate;
  } catch (error: any) {
    throw new Error(error);
  }
}
