import { UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<CreateEventFormValues>
  heading: string
  description: string
}

const FormStepOne = ({ register, heading, description }: Props) => {
  return (
    <div className='grid grid-cols-7 gap-x-10'>
      <div className='col-span-2 space-y-1 border-gray-200'>
        <h2 className='font-semibold text-lg'>{heading}</h2>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>

      <div className='grid grid-cols-2 gap-x-10 gap-y-7 col-span-5 mb-4'>
        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Event Name</label>
          <input {...register('name')} type="text" className='form-input' placeholder="Event Name" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Event Type</label>
          <input {...register('eventType')} type="text" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Start Date</label>
          <input {...register('startDate')} type="date" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">End Date</label>
          <input {...register('endDate')} type="date" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Event Category</label>
          <input {...register('eventCategory')} type="text" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col space-y-2 w-full'>
          <label className='form-label' htmlFor="">Location</label>
          <input {...register('location')} type="text" className='form-input' placeholder="Event Type" />
        </div>

        <div className='flex flex-col col-span-2 space-y-2 w-full'>
          <label className='form-label' htmlFor="">Description</label>
          <textarea {...register('description')} rows={3} className='form-input' placeholder="Event Type"></textarea>
        </div>

      </div>
    </div>
  )
}

export default FormStepOne