'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const BudgetTracking = () => {

  const events = ['Hackathon', 'Workshop', 'Seminar', 'Meetup', 'Conference', 'Bootcamp', 'Birthday', 'Party', 'Baby Shower']
  const estimatedBudget = [2000, 100, 300, 2000, 1200, 1560, 3000, 2500, 2100]
  const actualBudget = [1000, 200, 300, 1000, 500, 1400, 3400, 1500, 2000]

  const state = {
    labels: events,
    datasets: [
      {
        label: '$',
        lineTension: 0.4,
        backgroundColor: [
          // put light colors 
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(239, 218, 0.12, 0.1)',
          'rgba((239, 218, 0.12, 0.1)',
        ],
        borderColor: 'rgb(206, 239, 218, 0.1)',
        borderWidth: 2,
        data: estimatedBudget,
        fill: {
          target: 'origin',
          above: 'rgb(255,20,142,0.3)',   // Area will be red above the origin
          below: 'rgba(255,20,142,0.8)'    // And blue below the origin
        }
      },
      {
        label: '$',
        lineTension: 0.4,
        backgroundColor: [
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
          'rgba(206, 239, 218, 0.1)',
        ],
        borderColor: 'rgb(153, 12, 25)',
        borderWidth: 2,
        data: actualBudget,
        fill: {
          target: 'origin',
          above: 'rgba(206, 239, 218, 0.1)',   // And blue below the origin
          below: 'rgba(206, 239, 218, 0.8)'    // And blue below the origin
        }
      }
    ],
    options: {
      plugins: {
        filler: {
          propagate: true
        }
      }
    }
  }

  ChartJS.register(...registerables, CategoryScale)
  return (
    <div className=''>
      <Line
        width={500}
        height={250}
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Estimated vs Actual Budget',
            },
            legend: {
              display: true,
              position: 'left',
              fullSize: false,
            }
          }
        }}
      />
    </div>
  )
}

export default BudgetTracking
