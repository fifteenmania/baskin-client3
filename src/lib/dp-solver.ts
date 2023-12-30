export class DpSolver {
  constructor() {}

  /**
   * Get the probability of 1-winning for each player
   * @param numPlayer
   * @param maxCall
   * @param numEnd
   * @returns
   */
  getLoseProbMatrix(
    numPlayer: number,
    maxCall: number,
    numEnd: number,
  ): number[][] {
    const loseProbMat = []
    const initialRow = Array.from({ length: numPlayer }, idx => {
      if (idx === 0) {
        return 1
      }
      return 0
    })
    loseProbMat.push(initialRow)
    for (let row = numEnd - 1; row >= 0; row--) {
      const newRow = []
    }
    return loseProbMat
  }
}
