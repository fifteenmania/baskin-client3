export class DpSolver {
  numPlayer: number
  maxCall: number
  numEnd: number

  constructor() {
    this.numPlayer = 3
    this.maxCall = 3
    this.numEnd = 31
  }

  getLoseProbMatrix(): number[][] {
    const loseProbMat = []
    return [[]]
  }
}
