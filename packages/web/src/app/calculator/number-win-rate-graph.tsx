'use client'
import { ApexOptions } from 'apexcharts'
import ApexChart from '../_components/apex-chart'
import { useEffect, useState, useTransition } from 'react'
import { DpSolver } from '@/lib/dp-solver'
import { useRecoilValue } from 'recoil'
import { maxCallAtom } from '@/recoil/max-call-atom'
import { numEndAtom } from '@/recoil/num-end-atom'
import { numPlayerAtom } from '@/recoil/num-player-atom'

export function NumbarWinRateGraph() {
  const maxCall = useRecoilValue(maxCallAtom)
  const numEnd = useRecoilValue(numEndAtom)
  const numPlayer = useRecoilValue(numPlayerAtom)
  const solver = new DpSolver()
  const options: ApexOptions = {
    chart: {
      height: 420,
      id: 'baskin-robbins-31',
    },
    xaxis: {
      categories: Array(numEnd)
        .fill(0)
        .map((_, i) => i + 1),
    },
    yaxis: {
      tickAmount: 10,
      max: 1,
      min: 0,
      labels: {
        formatter: (val: number) => `${Math.round(val * 100)}%`,
      },
    },
    dataLabels: {
      formatter: (val: number) => `${Math.round(val * 100)}`,
    },
    colors: [
      function ({
        value,
        seriesIndex,
        w,
      }: {
        value: number
        seriesIndex: number
        w: any
      }) {
        if (value < 0.5) return '#f44336'
        if (value < 0.7) return '#ff9800'
        return '#4caf50'
      },
    ],
  }
  const [isTranstion, transitionFunction] = useTransition()
  const [chart, setChart] = useState<any>()
  useEffect(() => {
    transitionFunction(() => {
      setChart(() => (
        <ApexChart
          options={options}
          series={[
            {
              name: 'series-1',
              data: solver
                .getWinProbMatrix(numPlayer, maxCall, numEnd)
                .map(row => row[0]),
            },
          ]}
          type="bar"
          zoom={{
            enabled: true,
            type: 'x',
          }}
        />
      ))
    })
  }, [numPlayer, maxCall, numEnd])
  return (
    <div className="h-full w-full">
      <h2 className="">기대 승률 그래프</h2>
      <p>해당 숫자까지 불렀을 때의 기대 승률입니다.</p>
      {isTranstion && numEnd > 50 ? (
        <div className="h-full w-full flex justify-center items-center py-10">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        chart
      )}
    </div>
  )
}
