'use client'

import { maxCallAtom } from '@/recoil/max-call-atom'
import { numEndAtom } from '@/recoil/num-end-atom'
import { numPlayerAtom } from '@/recoil/num-player-atom'
import { useRecoilState } from 'recoil'

export function ControlPanel() {
  const [numPlayer, setNumPlayer] = useRecoilState(numPlayerAtom)
  const numPlayerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const num = parseInt(value)
    if (isNaN(num)) return setNumPlayer(0)
    setNumPlayer(num)
  }
  const [maxCall, setMaxCall] = useRecoilState(maxCallAtom)
  const maxCallOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const num = parseInt(value)
    if (isNaN(num)) return setMaxCall(1)
    setMaxCall(num)
  }
  const [numEnd, setNumEnd] = useRecoilState(numEndAtom)
  const numEndOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const num = parseInt(value)
    if (isNaN(num)) return setNumEnd(1)
    setNumEnd(num)
  }
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">게임 설정 변경</div>
      <div className="collapse-content">
        <div className="flex flex-col gap-y-4">
          <label htmlFor="num-player">플레이어 수</label>
          <input
            type="number"
            id="num-player"
            className="input max-w-xs"
            min="0"
            value={numPlayer}
            onChange={numPlayerOnChange}
          />
          <label htmlFor="max-call">최대 콜 수</label>
          <input
            type="number"
            id="max-call"
            className="input max-w-xs"
            min="1"
            value={maxCall}
            onChange={maxCallOnChange}
          />
          <label htmlFor="num-end">마지막 숫자</label>
          <input
            type="number"
            id="num-end"
            className="input max-w-xs"
            min="1"
            value={numEnd}
            onChange={numEndOnChange}
          />
        </div>
      </div>
    </div>
  )
}
