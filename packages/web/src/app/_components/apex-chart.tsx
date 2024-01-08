'use client'
import { useEffect, useState } from 'react'
import { Props as ApexProps } from 'react-apexcharts'

export default function ApexChart(props: ApexProps) {
  const [Chart, setChart] = useState<any>()
  const hasType = typeof props?.type !== 'undefined'

  useEffect(() => {
    import('react-apexcharts').then(mod => {
      setChart(() => mod.default)
    })
  }, [])

  return hasType && Chart && <Chart {...props} />
}
