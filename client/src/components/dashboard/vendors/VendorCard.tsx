'use client'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface Props {
  companyName: string
  name: string
  contact: string
  index: number
  description: string
  icon: JSX.Element
  id: string
}

const VendorCard = ({ companyName, index, name, contact, description, icon, id }: Props) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(`/vendors/${id}`)}
      className={`h-56 w-[260px] hover:shadow-md flex-flex-col space-y-16 border-[1px] p-4 border-gray-300 text-gray-800 hover:cursor-pointer rounded-md
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
            {icon}
          </div>
        </div>
        <div className='h-6 w-6 text-gray-500'>
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* content  */}
      <div>
        <h3 className='text-gray-600 text-lg font-bold'>{companyName}</h3>
        <p className='text-xs font-semibold'>{name}, {contact}</p>
        <p className='text-xs text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default VendorCard