'use client'
import { getCurrentUser } from '@/actions/getCurrentUser'
import CreateEventForm from '@/components/dashboard/create/CreateEventForm'
import FormStepOne from '@/components/dashboard/create/FormStepOne'
import FormStepThree from '@/components/dashboard/create/FormStepThree'
import FormStepTwo from '@/components/dashboard/create/FormStepTwo'
import userUserStore from '@/hooks/useUserStore'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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
  speakerContact: string
  speakerRemark: string
  sponsorName: string
  sponsorCompanyName: string
  sponsorCompanyEmail: string
  sponsorAmount: string
  sponsorRemark: string
  sponsorDescription: string
}

const CreateEvent = () => {

  const user = userUserStore((state) => state.user)

  if (user.role !== 'Organizer') {
    return <div>Not Authorized</div>
  }

  return (
    <div className=''>
      <h2 className='heading m-4'>Create Event</h2>

      <CreateEventForm />
    </div>
  )
}

export default CreateEvent
