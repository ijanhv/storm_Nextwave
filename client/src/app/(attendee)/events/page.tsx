import EventCard from "@/components/dashboard/attendees/EventCard";

const events = [
  {
    id: "1",
    name: "Wedding",
    description: "Wedding is a ceremony where two people are united in marriage.",
    date: "2021-09-23",
    time: "12:00:00",
    location: "Mumbai",
    organizer: "Smith Dsouza",
    contact: "+91 987871221",
  }
]

const EventsPage = async () => {

  if (events.length === 0) {
    return (
      <h1>
        No events are available. Please check back later
      </h1>
    );
  }
  return (
    <div className="px-5 pt-3">
      <h2 className="text-4xl pb-2 border-b border-gray-200 hover:cursor-pointer mb-5 text-orange-600 font-bold">
        Eventsy.
      </h2>

      <div className="border grid grid-cols-2 border-gray-200 p-4 rounded-lg">
        {events.map((event, index) => (
          <EventCard key={index}
            index={index}
          />
        ))}

      </div>
    </div>
  );
};

export default EventsPage;
