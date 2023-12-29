'use client'
import { BarGraph } from './bar-graph'
import { ControlPanel } from './control-panel'

export default function () {
  return (
    <div className="flex flex-col">
      <ControlPanel />
      <BarGraph />
    </div>
  )
}
