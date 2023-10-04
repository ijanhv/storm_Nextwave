'use client'
// named imports
import { CategoryScale } from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js'

const CategoryDistribution = () => {

  const labels = ['Hackathon', 'Workshop', 'Seminar', 'Meetup', 'Conference']
  const count = [20, 10, 30, 20, 12]

  const state = {
    labels: labels,
    datasets: [
      {
        label: 'Events',
        backgroundColor: [
          'rgb(125, 219, 232)',
          'rgb(254, 212, 235)',
          'rgb(255, 205, 186)',
          'rgb(235, 199, 132)',
          'rgb(154, 216, 235)',
        ],
        borderColor: 'rgb(0,0,0, 0.1)',
        borderWidth: 2,
        data: count,
      },
    ],
    options: {
      spacing: 5,
      radius: '100%',
      cutout: '70%',
      plugins: {
        filler: {
          propagate: true
        }
      }
    }
  }
  ChartJS.register(...registerables, CategoryScale)
  return (
    <div className='max-w-[300px] ml-16'>
      <Doughnut
        height={250}
        width={200}
        data={state}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Category Distribution',
            },
            legend: {
              display: true,
              position: 'right',
              fullSize: true,
            }
          }
        }}
      />
    </div>
  )
}

export default CategoryDistribution
