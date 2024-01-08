import { atom } from 'recoil'
import { recoilKeys } from './recoil-keys'

export const numEndAtom = atom({
  key: recoilKeys.numEnd,
  default: 31,
})
