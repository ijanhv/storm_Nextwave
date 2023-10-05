'use client'
import { useState } from "react";
import { useForm } from "react-hook-form"

interface EventType {
  Workshop: number;
  Wedding: number;
  Birthday: number;
  Hackathon: number;
  Family: number;
  Party: number;
  [key: string]: number; // Index signature
}

interface BudgetRange {
  "10k-20k": number;
  "20k-50k": number;
  "50k-1lakh": number;
  "1lakh-5lakh": number;
  "5lakh-20lakh": number;
  [key: string]: number; // Index signature
}

interface NumberOfPeople {
  "0-50": number;
  "50-250": number;
  "250-500": number;
  "500-1000": number;
  [key: string]: number; // Index signature
}

const IntelliEvents = () => {

  const eventType: EventType = {
    "Workshop": 1,
    "Wedding": 2,
    "Birthday": 3,
    "Hackathon": 4,
    "Family": 5,
    "Party": 6,
  }

  const budgetRange: BudgetRange = {
    "10k-20k": 1,
    "20k-50k": 2,
    "50k-1lakh": 3,
    "1lakh-5lakh": 4,
    "5lakh-20lakh": 5,
  }

  const numberOfPeople: NumberOfPeople = {
    "0-50": 1,
    "50-250": 2,
    "250-500": 3,
    "500-1000": 4,
  }

  type FormData = {
    Event_Type_Category: number
    Budget_Range_Category: number
    Number_of_People_Category: number
  }

  type Predictions = {
    decorations: number
    food: number
    entertainment: number
    miscellanous: number
    venue: number
    transportation: number
    staffing: number
  }

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [getPrediction, setGetPrediction] = useState<Predictions>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    const response = await fetch('http://localhost:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const prediction = await response.json()
    // modify the prediction to show the result


    setGetPrediction(prediction)
    console.log(prediction)
  })

  return (
    <div className='m-5'>
      <h2 className='heading mb-5'>IntelliEvents</h2>
      <form
        onSubmit={onSubmit}
        action="p-4 border border-gray-300 rounded-lg">
        <div className='flex flex-col space-y-7 mx-20'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor="eventType">Type of Event you want to conduct </label>
            <select
              {...register('Event_Type_Category')}
              className='p-3 focus:outline-none border border-gray-300 rounded-lg' name="eventType" id="eventType">
              {Object.keys(eventType).map((key, index) => (
                <option key={index}
                  value={eventType[key]}
                >{key}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="eventType">Enter a budget amount that you have fixed for the event</label>
            <select
              {...register('Budget_Range_Category')}
              className='p-3 focus:outline-none border border-gray-300 rounded-lg' name="eventType" id="eventType">
              {Object.keys(budgetRange).map((key, index) => (
                <option key={index}
                  value={budgetRange[key]}
                >{key}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col space-y-2'>
            <label htmlFor="eventType">Enter the number of people for the Event</label>
            <select
              {...register('Number_of_People_Category')}
              className='p-3 focus:outline-none border border-gray-300 rounded-lg' name="eventType" id="eventType">
              {Object.keys(numberOfPeople).map((key, index) => (
                <option key={index}
                  value={numberOfPeople[key]}
                >{key}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          type='submit'
          className='px-3 py-2 mt-5 ml-[400px] rounded-md bg-slate-900 text-white'>Submit</button>
      </form>

      {getPrediction && (
        <div className='w-full my-6 rounded-xl border border-gray-300 shadow-md p-3 px-10'>
          <div>
            <p className='text-orange-700 my-2 font-semibold'>The predicted price for the event is:</p>

            <div className='grid text-sm grid-cols-2 gap-x-5 gap-y-5'>
              <div className='flex justify-between items-center'>
                <p>Decorations Expenses</p>
                <p className='font-bold'>INR {getPrediction.decorations.toPrecision(5)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Venue Expenses</p>
                <p className='font-bold'>INR {getPrediction.venue.toPrecision(5)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Entertainment Expenses</p>
                <p className='font-bold'>INR {getPrediction.entertainment.toPrecision(5)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Catering Expenses</p>
                <p className='font-bold'>INR {getPrediction.food.toPrecision(5)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Staff Expenses</p>
                <p className='font-bold'>INR {getPrediction.staffing.toPrecision(5)}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p>Transportation Expenses</p>
                <p className='font-bold'>INR {getPrediction.transportation.toPrecision(5)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IntelliEvents