import { svgAssets } from '@/asset/svg'
import Link from 'next/link'

export function Gnb() {
  return (
    <div
      className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] 
    shadow-sm"
    >
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button lg:hidden"
          >
            {svgAssets.IcMenu}
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link href="/" className="btn btn-ghost">
            The Thirt-One Simulator
          </Link>
        </div>
      </div>
    </div>
  )
}
