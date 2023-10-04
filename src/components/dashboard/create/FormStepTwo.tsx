
import { UseFormRegister } from "react-hook-form"

interface Props {
  register: UseFormRegister<CreateEventFormValues>
  heading: string
  description: string
}

const FormStepThree = ({ register, heading, description }: Props) => {
  return (
    <div className='grid grid-cols-7 gap-x-10 overflow-y-srcoll overflow-x-hidden h-[390px]'>
      <div className='col-span-2 space-y-1 border-gray-200'>
        <h2 className='font-semibold text-lg'>{heading}</h2>
        <p className='text-sm text-gray-500'>{description}</p>
      </div>

      <div className='col-span-5'>
        <div>
          <h2 className='font-bold my-1'>Speaker Details</h2>
          <div className='grid grid-cols-2 gap-x-10 gap-y-7 mb-4'>
            <div className='flex flex-col space-y-2 w-full'>
              <label className='form-label' htmlFor="">Name</label>
              <input {...register('speakerName')} type="text" className='form-input' placeholder="Event Name" />
            </div>

            <div className='flex flex-col space-y-2 w-full'>
              <label className='form-label' htmlFor="">Email</label>
              <input {...register('speakerEmail')} type="text" className='form-input' placeholder="Event Type" />
            </div>

            <div className='flex flex-col space-y-2 w-full'>
              <label className='form-label' htmlFor="">Contact</label>
              <input {...register('speakerContact')} type="text" className='form-input' placeholder="Event Name" />
            </div>

            <div className='flex flex-col space-y-2 w-full'>
              <label className='form-label' htmlFor="">Remark</label>
              <input {...register('speakerRemark')} type="text" className='form-input' placeholder="Event Type" />
            </div>
          </div>

          <div className='border-t border-gray-200 mt-6'>
            <h2 className='font-bold my-1 mt-5'>Sponsor Details</h2>
            <div className='grid grid-cols-2 gap-x-10 gap-y-7 mb-4'>

              <div className='flex flex-col space-y-2 w-full'>
                <label className='form-label' htmlFor="">Company Name</label>
                <input {...register('sponsorCompanyName')} type="text" className='form-input' placeholder="Event Type" />
              </div>

              <div className='flex flex-col space-y-2 w-full'>
                <label className='form-label' htmlFor="">Company Email</label>
                <input {...register('sponsorCompanyEmail')} type="text" className='form-input' placeholder="Event Type" />
              </div>

              <div className='flex flex-col space-y-2 w-full'>
                <label className='form-label' htmlFor="">Amount</label>
                <input {...register('sponsorAmount')} type="text" className='form-input' placeholder="Event Name" />
              </div>

              <div className='flex flex-col space-y-2 w-full'>
                <label className='form-label' htmlFor="">Remark</label>
                <input {...register('sponsorRemark')} type="text" className='form-input' placeholder="Event Type" />
              </div>

              <div className='flex flex-col col-span-2 space-y-2 w-full'>
                <label className='form-label' htmlFor="">Description</label>
                <textarea {...register('sponsorDescription')} rows={4} className='form-input' placeholder="Event Type"></textarea>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormStepThree