/**
 * Get a random number betweeen the input range
 * @param {number} min - min number of the input range
 * @param {number} max - max number of the input range
 * @returns number
 */
export const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
