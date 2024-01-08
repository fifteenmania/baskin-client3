import { atom } from 'recoil'
import { recoilKeys } from './recoil-keys'

export const maxCallAtom = atom({
  key: recoilKeys.maxCall,
  default: 3,
})
