import { getCurrentUser } from "@/actions/getCurrentUser";
import BudgetTracking from "@/components/dashboard/home/BudgetTracking";
import CategoryDistribution from "@/components/dashboard/home/CategoryDistribution";

const events = [
  {
    id: 1,
    eventName: 'Event 1',
    category: 'Conference',
    budget: '$10,000',
    startDate: '2023-10-10',
    endDate: '2023-10-12',
  },
  {
    id: 2,
    eventName: 'Event 2',
    category: 'Workshop',
    budget: '$5,000',
    startDate: '2023-11-05',
    endDate: '2023-11-06',
  },
  {
    id: 3,
    eventName: 'Event 3',
    category: 'Hackathon',
    budget: '$15,000',
    startDate: '2023-12-01',
    endDate: '2023-12-03',
  },
  {
    id: 4,
    eventName: 'Event 4',
    category: 'Seminar',
    budget: '$2,000',
    startDate: '2023-12-15',
    endDate: '2023-12-16',
  },
  {
    id: 5,
    eventName: 'Event 5',
    category: 'Meetup',
    budget: '$1,000',
    startDate: '2023-12-20',
    endDate: '2023-12-20',
  },
  {
    id: 6,
    eventName: 'Event 6',
    category: 'Conference',
    budget: '$10,000',
    startDate: '2023-10-10',
    endDate: '2023-10-12',
  }
];

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role !== "Organizer") {
    return <h1>Not Authorized</h1>;
  }

  return (
    <div className='m-5'>
      <h2 className='heading'>Hello, {currentUser.name}</h2>
      <div>

        <div className='grid grid-cols-2 p-3 border border-gray-300 m-3 rounded-lg'>
          <BudgetTracking />
          <CategoryDistribution />

          <div className='col-span-2 mt-5'>
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-orange-100">
                  <th className="table-header">Event Name</th>
                  <th className="table-header">Category</th>
                  <th className="table-header">Budget</th>
                  <th className="table-header">Start Date</th>
                  <th className="table-header">End Date</th>
                </tr>
              </thead>
              <tbody className=''>
                {events.map((event, index) => (
                  <tr key={event.id}
                    className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="table-data">{event.eventName}</td>
                    <td className="table-data">{event.category}</td>
                    <td className="table-data">{event.budget}</td>
                    <td className="table-data">{event.startDate}</td>
                    <td className="table-data">{event.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage