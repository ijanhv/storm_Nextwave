import getEvents from "@/actions/getEvents";
import getServices from "@/actions/getServices";
import { Vendor } from "@prisma/client";

const EventsPage = async () => {
  const events = await getEvents();
  console.log(events);

  if (events.length === 0) {
    return (
      <h1>
        No events are available. Please check back later
      </h1>
    );
  }
  return (
    <div className="">
      <h2 className="heading m-4">My Services</h2>


      <div className="grid grid-cols-3 gap-x-9 gap-y-7 my-7 h-[450px] overflow-x-hidden overflow-y-scroll">
        {events.map((event: any) => {
          return (
            <div>
  
              <h1 className="text-2xl text-black">{event?.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsPage;
