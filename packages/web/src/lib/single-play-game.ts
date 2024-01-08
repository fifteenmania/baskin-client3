import { DpSolver } from "./dp-solver";
import { weightedRandom } from "./util/random-util";

export class SinglePlayGame {
  numPlayer: number;
  maxCall: number;
  numEnd: number;
  playerTurn: number;
  private solver: DpSolver;
  private loseProbMat: number[][];

  constructor(numPlayer: number, maxCall: number, numEnd: number, playerTurn: number) {
    this.numPlayer = numPlayer;
    this.maxCall = maxCall;
    this.numEnd = numEnd;
    this.playerTurn = playerTurn;
    this.solver = new DpSolver();
    this.loseProbMat = this.solver.getLoseProbMatrix(numPlayer, maxCall, numEnd);
  }

  chooseNextCall(prevValue: number): number {
    const lookupVector = this.loseProbMat.slice(prevValue, prevValue + this.maxCall);
    const minOfFirstCol = Math.min(...lookupVector.map(row => row[0]));
    const minRowCount = lookupVector.filter(row => row[0] === minOfFirstCol).length;
    const weights = lookupVector.map(row => row[0] === minOfFirstCol ? 1 / minRowCount : 0);
    const nextCall = weightedRandom(weights);
    return nextCall;
  }
}
