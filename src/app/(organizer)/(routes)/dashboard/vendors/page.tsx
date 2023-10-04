import VendorCard from "@/components/dashboard/vendors/VendorCard"
import { BuildingStorefrontIcon, VideoCameraIcon, SparklesIcon, MusicalNoteIcon } from "@heroicons/react/24/outline"

const vendorsList = [
  {
    id: "1",
    companyName: 'Smith and sons Pvt Ltd',
    name: 'Smith Dsouza',
    contact: '+91 987871221',
    description: 'Providing the best services in the market for the past 10 years.',
    icon: <BuildingStorefrontIcon />,
  },
  {
    id: "2",
    companyName: 'Andre Photography',
    name: 'Andre Johnson',
    contact: '+91 987871221',
    description: 'Preserving your memories then and now.',
    icon: <VideoCameraIcon />
  },
  {
    id: "3",
    companyName: 'Decors and more',
    name: 'Eva',
    contact: '+91 987871221',
    description: 'Innovative and creative designs for your events',
    icon: <SparklesIcon />
  },
  {
    id: "4",
    companyName: 'Melody Music',
    name: 'Quentin Tarantino',
    contact: '+91 987871221',
    description: 'Chime in the best music for your events',
    icon: <MusicalNoteIcon />
  },
]

const VendorsPage = () => {
  return (
    <div className='m-5'>
      <h2 className='heading'>Vendors</h2>

      <div className='border flex flex-col justify-end border-gray-300 px-6 py-2 my-3 rounded-lg'>

        <div className='grid grid-cols-3 gap-x-9 gap-y-7 my-7 h-[450px] overflow-x-hidden overflow-y-scroll'>
          {vendorsList.map((vendor, index) => (
            <VendorCard
              index={index}
              key={index}
              id={vendor.id}
              name={vendor.name}
              companyName={vendor.companyName}
              contact={vendor.contact}
              description={vendor.description}
              icon={vendor.icon}
            />
          )
          )}
        </div>
      </div>

    </div>
  )
}

export default VendorsPage
