'use client'
import { ArrowUpRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface Props {
  category: string
  contactPerson: string
  description: string
  email: string
  location: string
  name: string
  phone: string
  pricing: string
  index: number
}

const ServiceCard = ({ category, index, contactPerson, description, email, location, name, phone, pricing }: Props) => {
  const router = useRouter()

  return (
    <div>

      <div
        className={`hover:shadow-md flex-flex-col border-[1px] p-4 border-gray-300 text-gray-800 hover:cursor-pointer rounded-md
        ${index % 3 === 0 ? 'hover:border-purple-400' :
            index % 3 === 1 ? 'hover:border-blue-400' : 'hover:border-green-400'
          }`}
      >
        {/* icons  */}
        <div className='flex justify-between items-center'>
          <div className={`p-3 rounded-lg bg-gray-100
          ${index % 3 === 0 ? 'bg-purple-100' :
              index % 3 === 1 ? 'bg-blue-100' : 'bg-green-100'
            }`}
          >
            <div className={`h-6 w-6 
            ${index % 3 === 0 ? 'text-purple-800' :
                index % 3 === 1 ? 'text-blue-800' : 'text-green-800'
              }
            `}
            >
              <BriefcaseIcon />
            </div>
          </div>
        </div>

        {/* content  */}
        <div className='flex flex-col space-y-1 mt-3'>
          <h3 className='text-gray-600 text-lg font-bold'>{name}</h3>
          <p className='text-xs font-semibold'>{contactPerson}, {email}</p>
          <p className='text-xs font-semibold'>{phone}</p>
          <p className='text-xs font-semibold'>{location}</p>
          <p className='text-xs text-gray-500'>{description}</p>
          <p className='text-lg text-orange-500 font-semibold'>{pricing}/ day</p>
          <p className='text-xs text-orange-700 rounded-full px-2 py-1 bg-orange-100 w-1/2 text-center font-semibold'>{category}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard