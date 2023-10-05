import { useState } from "react"
import { UseFormRegister } from "react-hook-form"

interface Props {
  register: UseFormRegister<CreateEventFormValues>
  heading: string
  description: string
}

const FormStepTwo = ({ register, heading, description }: Props) => {
  const [ticketsQuantity, setTicketsQuantity] = useState<number>(0)

  return (
    <div className='grid grid-cols-7 gap-x-10'>
      <div className='col-span-2 space-y-1 border-gray-200'>
        <h2 className='font-semibold text-lg'>{heading}</h2>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>

      <div className='grid grid-cols-2 gap-x-10 gap-y-7 col-span-5 mb-4'>
        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Ticket Name</label>
          <input {...register('ticketName')} type="text" className='form-input' placeholder="Event Name" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Ticket Price</label>
          <input {...register('ticketPrice')} type="text" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Quantity of Tickets</label>
          <input {...register('ticketsQuantity')} type="text" className='form-input' placeholder="Event Type" />
        </div>

      </div>
    </div>
  )
}

export default FormStepTwo