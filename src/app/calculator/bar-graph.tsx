'use client'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import ApexChart from '../_components/apex-chart'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export function BarGraph() {
  const options: ApexOptions = {
    chart: {
      height: 420,
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  }

  return (
    <div className="h-full w-full">
      <ApexChart
        options={options}
        series={[
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
          },
        ]}
        type="bar"
      />
    </div>
  )
}
