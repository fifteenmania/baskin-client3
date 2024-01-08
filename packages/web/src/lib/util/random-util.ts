export function weightedRandom(weights: number[]) {
  const total = weights.reduce((a, b) => a + b)
  const r = Math.random() * total
  let i = 0
  let sum = weights[i]
  while (r > sum) {
    i++
    sum += weights[i]
  }
  return i
}
