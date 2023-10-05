'use client'
import { ArrowUpRightIcon, RocketLaunchIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface Props {
  index: number
}
const EventCard = ({ index }: Props) => {
  return (
    <div
      className={`hover:shadow-md flex-flex-col space-y-16 border-[1px] p-4 border-gray-300 text-gray-800 hover:cursor-pointer rounded-md
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
            <RocketLaunchIcon />
          </div>
        </div>
        <div className='h-6 w-6 text-gray-500'>
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* content  */}
      <div className='flex flex-col space-y-1 mt-3'>
        <h3 className='text-gray-600 text-3xl font-bold'>Codeissance</h3>
        <p className='text-xl font-semibold'>Hackathon, TSEC</p>
        <p className='text-sm text-gray-500'>
          Codeissance is a hackathon organized by the students of TSEC. It is a
          24-hour hackathon where students from all over the country come
          together to build innovative solutions to real-world problems.
        </p>
        <p className='text-xs font-semibold'></p>
        <p className='font-semibold'>Bandra</p>
        <p className='text-3xl text-orange-500 font-semibold'>$ 20</p>
        <div className='mx-auto w-full ml-48 items-center space-y-3'>
          <button
            onClick={() => {
              toast.success("Redirecting to payment gateway")
            }}
            className='px-3 py-2 w-1/4 border border-purple-300 rounded-full hover:bg-purple-50 font-semibold'>Book tickets</button>
          <p className='text-xs -ml-16 text-orange-700 rounded-full px-2 py-1 bg-orange-100 w-1/2 text-center font-semibold'>Information Technology</p>
        </div>
      </div>
    </div>
  )
}

export default EventCard