import { describe, test, expect } from '@jest/globals'
import { DpSolver } from './dp-solver'

describe('dp-solver', () => {
  test('initializes', () => {
    const dpSolver = new DpSolver()
    expect(dpSolver).toBeTruthy()
  })
  test('2player, max 2, end in 1', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 2, 1)
    expect(loseProbMat).toEqual([[1, 0]])
  })
  test('2player, max 2, end in 2', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 2, 2)
    expect(loseProbMat).toEqual([
      [1, 0],
      [0, 1],
    ])
  })
  test('2player, max 2, end in 3', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 2, 3)
    expect(loseProbMat).toEqual([
      [1, 0],
      [0, 1],
      [1, 0],
    ])
  }),
    test('2player, max 2, end in 4', () => {
      const dpSolver = new DpSolver()
      const loseProbMat = dpSolver.getLoseProbMatrix(2, 2, 4)
      expect(loseProbMat).toEqual([
        [1, 0],
        [0, 1],
        [1, 0],
        [1, 0],
      ])
    })
  test('2player, max 2, end in 5', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 2, 5)
    expect(loseProbMat).toEqual([
      [1, 0],
      [0, 1],
      [1, 0],
      [1, 0],
      [0, 1],
    ])
  })
  test('2player, max 3, end in 1', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 3, 1)
    expect(loseProbMat).toEqual([[1, 0]])
  })
  test('2player, max 3, end in 2', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(2, 3, 2)
    expect(loseProbMat).toEqual([
      [1, 0],
      [0, 1],
    ])
  })
  test('3player, end in 1', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(3, 2, 1)
    expect(loseProbMat).toEqual([[1, 0, 0]])
  })
  test('3player, end in 2', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(3, 2, 2)
    expect(loseProbMat).toEqual([
      [1, 0, 0],
      [0, 1, 0],
    ])
  })
  test('3player, end in 3', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(3, 2, 3)
    expect(loseProbMat).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  })
  test('3player, end in 4', () => {
    const dpSolver = new DpSolver()
    const loseProbMat = dpSolver.getLoseProbMatrix(3, 2, 4)
    expect(loseProbMat).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1 / 2, 0, 1 / 2],
    ])
  })
})
