'use client'

import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"

const VendorID = () => {
  const vendorId = useParams()

  const vendorDetails = {
    companyName: 'Smith and sons Pvt Ltd',
    name: 'Smith Dsouza',
    contact: '+91 987871221',
    description: 'Providing the best services in the market for the past 10 years.',
    email: 'smith@gmail.com',
    category: 'Venue Provider',
    location: 'Mumbai',
    rating: '4.5',
    bookingStatus: 'Available',
    services: [
      {
        serviceName: 'Event Hall Rental',
        serviceDescription: 'Spacious event hall for various occasions.',
        servicePrice: '$1500 per day',
        capacity: 'Up to 300 people',
        location: 'Bandra',
      },
      {
        serviceName: 'Meeting Room Booking',
        serviceDescription: 'Modern meeting rooms with audiovisual equipment.',
        servicePrice: '$300 per day',
        capacity: 'Up to 20 people',
        location: 'Chembur',
      },
      {
        serviceName: 'Outdoor Venue Rental',
        serviceDescription: 'Beautiful outdoor venues for weddings and parties.',
        servicePrice: '$2000 per day',
        capacity: 'Up to 500 people',
        location: 'Andheri',
      },
      {
        serviceName: 'Small Conference Room Booking',
        serviceDescription: 'Cozy conference rooms for small meetings.',
        servicePrice: '$150 per day',
        capacity: 'Up to 10 people',
        location: 'Vashi',
      },
    ]
  }

  return (
    <div className='m-5'>
      <h2 className='heading'>Vendor Details</h2>

      <div className='border flex flex-col justify-end border-gray-300 px-6 py-2 my-6 rounded-lg'>
        <div className='flex justify-between my-3'>
          <h3 className='text-xl font-semibold'>{vendorDetails.companyName}</h3>
          <button className='dashboard-btn text-[13px]'>Schedule Meeting</button>
        </div>

        <div className=''>
          <p className='text-sm text-gray-500'>{vendorDetails.description}</p>
          <p className='font-semibold'>{vendorDetails.name}, {vendorDetails.contact}</p>

          <div className='flex justify-between mt-4'>
            <div className='flex items-center'>
              <p className='text-sm text-gray-600'>Email</p>
              <p className='ml-2 font-bold text-orange-600'>{vendorDetails.email}</p>
            </div>

            <div className='flex items-center'>
              <p className='text-sm text-gray-600'>Category</p>
              <p className='ml-2 font-bold text-orange-600'>{vendorDetails.category}</p>
            </div>

            <div className='flex items-center'>
              <p className='text-sm text-gray-600'>Booking Status</p>
              <p className='ml-2 font-bold text-orange-600'>{vendorDetails.bookingStatus}</p>
            </div>

            <div className='flex items-center'>
              <p className='text-sm text-gray-600'>Location</p>
              <p className='ml-2 font-bold text-orange-600'>{vendorDetails.location}</p>
            </div>

            <div className='flex items-center'>
              <p className='text-sm text-gray-600'>Rating</p>
              <p className='ml-2 font-bold text-orange-600'>{vendorDetails.rating}⭐</p>
            </div>

          </div>

          <h2 className='font-semibold text-gray-700 text-lg mt-3'>Services</h2>
          <div className='h-[303px] p-5 space-y-3 mt-5 rounded-lg border border-orange-200 overflow-x-hidden overflow-y-scroll'>
            {vendorDetails.services.map((service, index) => ((
              <div key={index} className='border border-gray-300 rounded-lg p-4'>
                <div className='flex justify-between'>
                  <p className='text-lg font-semibold'>{service.serviceName}, {service.location}</p>
                  <p className='text-lg font-semibold'>{service.servicePrice}</p>
                </div>
                <p className='text-sm text-gray-500'>{service.serviceDescription}</p>
                <p className='text-sm text-gray-500'>Capacity: {service.capacity}</p>
              </div>
            ))
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default VendorID
