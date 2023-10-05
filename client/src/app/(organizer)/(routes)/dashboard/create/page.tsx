'use client'
import CreateEventForm from '@/components/dashboard/create/CreateEventForm'

type FormData = {
  name: string
  eventType: string
  startDate: string
  endDate: string
  eventCategory: string
  location: string
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

const CreateEvent = () => {
  return (
    <div className=''>
      <h2 className='heading m-4'>Create Event</h2>

      <CreateEventForm />
    </div>
  )
}

export default CreateEvent
