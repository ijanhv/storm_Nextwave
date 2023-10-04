'use client'
import { BuildingStorefrontIcon, VideoCameraIcon, SparklesIcon, MusicalNoteIcon } from "@heroicons/react/24/outline"
import VendorCard from "@/components/dashboard/vendors/VendorCard"
import FilterVendors from "@/components/dashboard/organizerVendors/FilterVendors"
import { useState } from "react"

const vendorsList = [
  {
    id: "1",
    companyName: 'Smith and sons Pvt Ltd',
    name: 'Smith Dsouza',
    contact: '+91 987871221',
    description: 'Providing the best services in the market for the past 10 years.',
    icon: <BuildingStorefrontIcon />,
    category: 'Venue',
  },
  {
    id: "2",
    companyName: 'Andre Photography',
    name: 'Andre Johnson',
    contact: '+91 987871221',
    description: 'Preserving your memories then and now.',
    icon: <VideoCameraIcon />,
    category: 'Photography'
  },
  {
    id: "3",
    companyName: 'Decors and more',
    name: 'Eva',
    contact: '+91 987871221',
    description: 'Innovative and creative designs for your events',
    icon: <SparklesIcon />,
    category: 'Decoration'
  },
  {
    id: "4",
    companyName: 'Melody Music',
    name: 'Quentin Tarantino',
    contact: '+91 987871221',
    description: 'Chime in the best music for your events',
    icon: <MusicalNoteIcon />,
    category: 'Music'
  },
]

const VendorsPage = () => {
  const categories = ['All', 'Decoration', 'Music', 'Venue', 'Photography', 'Catering']
  const [vendorCategory, setVendorCategory] = useState('All')

  const handleFilter = (vendor: any) => {
    if (vendorCategory === 'All') return true

    return vendor.category.toLowerCase() === vendorCategory.toLowerCase()
  }

  return (
    <div className='m-5'>
      <h2 className='heading'>Vendors</h2>

      <div className='border flex flex-col justify-end border-gray-300 px-6 py-2 my-5 rounded-lg'>

        <FilterVendors
          categories={categories}
          vendorCategory={vendorCategory}
          setVendorCategory={setVendorCategory}
        />

        <div className='grid grid-cols-3 gap-x-9 gap-y-7 my-7 h-[450px] overflow-x-hidden overflow-y-scroll'>
          {(vendorCategory !== 'all' ? vendorsList.filter(handleFilter) : vendorsList).map((vendor, index) => (
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
