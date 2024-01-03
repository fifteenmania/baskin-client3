'use client'
import { RecoilRoot } from 'recoil'
import { NumbarWinRateGraph } from './number-win-rate-graph'
import { ControlPanel } from './control-panel'

export default function () {
  return (
    <RecoilRoot>
      <div className="flex flex-col w-full">
        <ControlPanel />
        <NumbarWinRateGraph />
      </div>
    </RecoilRoot>
  )
}
