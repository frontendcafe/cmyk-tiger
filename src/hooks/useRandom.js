
export const useRandom = (max) => {
  return {
    rng: Math.floor(Math.random() * max)
  }
}