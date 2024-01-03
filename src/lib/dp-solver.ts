export class DpSolver {
  constructor() {}

  /**
   * Get the probability of losing(1-winning) for each player
   * @param numPlayer
   * @param maxCall
   * @param numEnd
   * @returns 2D array of probability of losing
   */
  getLoseProbMatrix(
    numPlayer: number,
    maxCall: number,
    numEnd: number,
  ): number[][] {
    const loseProbMat: number[][] = []
    const initialRow = Array(numPlayer).fill(0)
    initialRow[0] = 1
    loseProbMat.push(initialRow)
    for (let row = 1; row < numEnd; row++) {
      const newRow = Array(numPlayer).fill(0)
      const loopupStartIdx = Math.max(0, row - maxCall)
      // find min of the first column
      let minOfFirstCol = Infinity
      let minRowCount = 0
      // for (let minRow = loopupStartIdx; minRow < row; minRow++) {
      //   if (minOfFirstCol > loseProbMat[minRow][0]) {
      //     minOfFirstCol = loseProbMat[minRow][0]
      //     minRowCount = 1
      //   } else if (minOfFirstCol === loseProbMat[minRow][0]) {
      //     minRowCount++
      //   }
      // }
      minOfFirstCol = Math.min(...loseProbMat.slice(loopupStartIdx, row).map(row => row[0]))
      minRowCount = loseProbMat.slice(loopupStartIdx, row).filter(row => row[0] === minOfFirstCol).length
      for (let minRow = loopupStartIdx; minRow < row; minRow++) {
        if (minOfFirstCol === loseProbMat[minRow][0]) {
          for (let col = 0; col < numPlayer; col++) {
            newRow[(col + 1) % numPlayer] +=
              loseProbMat[minRow][col] / minRowCount
          }
        }
      }
      loseProbMat.push(newRow)
    }
    // revserse the matrix
    loseProbMat.reverse()
    return loseProbMat
  }

  getWinProbMatrix(
    numPlayer: number,
    maxCall: number,
    numEnd: number,
  ): number[][] {
    const loseProbMat = this.getLoseProbMatrix(numPlayer, maxCall, numEnd)
    const winProbMat = loseProbMat.map(row => row.map(prob => 1 - prob))
    return winProbMat
  }
}
