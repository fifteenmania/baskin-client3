import { atom } from 'recoil'
import { recoilKeys } from '../recoil-keys'

export const numPlayerAtom = atom({
  key: recoilKeys.calculator.numPlayer,
  default: 3,
})
