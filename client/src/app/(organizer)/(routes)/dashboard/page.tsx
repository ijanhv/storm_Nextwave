import { getCurrentUser } from "@/actions/getCurrentUser"
import getEvents from "@/actions/getEvents"
import BudgetTracking from "@/components/dashboard/home/BudgetTracking"
import CategoryDistribution from "@/components/dashboard/home/CategoryDistribution"

const events = [
  {
    id: 1,
    eventName: 'CodeFerence',
    category: 'Conference',
    budget: '$1000',
    startDate: '2023-10-10',
    endDate: '2023-10-12',
  },
  {
    id: 2,
    eventName: 'Reactify',
    category: 'Workshop',
    budget: '$500',
    startDate: '2023-11-05',
    endDate: '2023-11-06',
  },
  {
    id: 3,
    eventName: 'Codeissance',
    category: 'Hackathon',
    budget: '$1500',
    startDate: '2023-12-01',
    endDate: '2023-12-03',
  },
  {
    id: 4,
    eventName: 'Financialive',
    category: 'Seminar',
    budget: '$200',
    startDate: '2023-12-15',
    endDate: '2023-12-16',
  },
  {
    id: 5,
    eventName: 'Meet & Greet',
    category: 'Meetup',
    budget: '$1000',
    startDate: '2023-12-20',
    endDate: '2023-12-20',
  },
  {
    id: 6,
    eventName: 'CodeCon',
    category: 'Conference',
    budget: '$2,000',
    startDate: '2023-10-10',
    endDate: '2023-10-12',
  }
]

const DashboardPage = async () => {
  const currentUser = await getCurrentUser()
  const event = await getEvents()

  if (currentUser?.role !== "Organizer") {
    return <h1>Not Authorized</h1>
  }

  return (
    <div className='m-5'>
      <h2 className='heading'>Hello, {currentUser.name}</h2>

      <div>
        <div className='grid grid-cols-2 p-3 border border-gray-300 m-3 rounded-lg'>
          <BudgetTracking />
          <CategoryDistribution />

          <div className='col-span-2 mt-5'>
            <table className="w-full table-fixed h-[100px] border border-slate-300">
              <thead>
                <tr className="bg-slate-800 text-white  ">
                  <th className="table-header">Event Name</th>
                  <th className="table-header">Category</th>
                  <th className="table-header">Budget</th>
                  <th className="table-header">Start Date</th>
                  <th className="table-header">End Date</th>
                </tr>
              </thead>
              <tbody className='overflow-y-scroll h-[20px]'>
                {events.map((event, index) => (
                  <tr key={event.id}
                    className={`hover:cursor-pointer hover:bg-slate-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
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