import Image from 'next/image'
import { Sidebar } from './sidebar'
import { svgAssets } from '@/asset/svg'
import { Gnb } from './gnb'

export function GnbWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open h-full min-h-screen max-w-full w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-full w-full">
        <Gnb />
        {children}
      </div>
      <Sidebar />
    </div>
  )
}
