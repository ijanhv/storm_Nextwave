'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormStepOne from '@/components/dashboard/create/FormStepOne'
import FormStepThree from '@/components/dashboard/create/FormStepThree'
import FormStepTwo from '@/components/dashboard/create/FormStepTwo'
import userUserStore from '@/hooks/useUserStore'
import { apiUrl } from '@/lib/url'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

type FormData = {
  name: string
  eventType: string
  startDate: string
  endDate: string
  eventCategory: string
  location: string
  organizerId: string
  description: string
  ticketName: string
  ticketPrice: string
  ticketsQuantity: string
  speakerName: string
  speakerEmail: string
  speakerPhone: string
  speakerRemark: string
  sponsorName: string
  sponsorCompanyName: string
  sponsorCompanyEmail: string
  sponsorAmount: string
  sponsorRemark: string
  sponsorDescription: string
}
const CreateEventForm = () => {

  const [formStep, setFormStep] = useState<number>(1)
  const router = useRouter();
  const currentUser = userUserStore((state) => state.user);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    try {
      axios
        .post(`${apiUrl}/event`, {
          ...data,
          organizerId: currentUser?.id,
          // userId: currentUser?.id,
        })
        .then((response) => {
          console.log("Event created successfully:", response.data);
          toast.success("Event Created Successfully");
          router.refresh()
        })
        .catch((error) => {
          console.error("Error creating service:", error);
          toast.error("Error Creating Event");
        });
    } catch (error) { }
  };

  return (
    <form
      className='border flex flex-col justify-end border-gray-300 px-8 py-12 m-4 rounded-lg '
      onSubmit={handleSubmit(onSubmit)}
    >
      {formStep === 1 &&
        <FormStepOne
          heading='Event Details'
          description='Enter the details of your event and click next to continue.'
          register={register}
  
        />}
      {formStep === 2 &&
        <FormStepTwo
          heading='Speakers & Sponsors'
          description='Enter the details of the speakers and sponsors for your event'
          register={register}
       
        />}
      {formStep === 3 &&
        <FormStepThree
          heading='Tickets'
          description='Enter the details of the tickets for your event!'
          register={register}

        />}

      <div className='flex justify-between'>
        {formStep > 1 && (
          <button
            type='button'
            className='dashboard-btn'
            onClick={() => setFormStep(formStep - 1)}
          >
            Back
          </button>
        )}
        {formStep < 3 && (
          <button
            type='button'
            className='dashboard-btn  absolute right-32'
            onClick={() => setFormStep(formStep + 1)}
          >
            Next
          </button>
        )}
        {formStep === 3 && (
          <button
            className='dashboard-btn'
            type='submit'
          >
            Submit
          </button>
        )}
      </div>
    </form>


  )
}

export default CreateEventForm
