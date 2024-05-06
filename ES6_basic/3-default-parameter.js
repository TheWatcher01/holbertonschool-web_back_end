/**
 * @file 3-default-parameter.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description Demonstrates the use of default parameters in JavaScript.
 */

/**
 * @function getSumOfHoods
 * @description Calculates the sum of the initial number and the numbers
 * representing neighborhood expansions in 1989 and 2019. If the expansion
 * numbers are not provided, they default to 89 and 19, respectively.
 *
 * @param {number} initialNumber - The initial number of neighborhoods.
 * @param {number} [expansion1989=89] - The number of neighborhoods added in 1989.
 * @param {number} [expansion2019=19] - The number of neighborhoods added in 2019.
 *
 * @returns {number} The sum of the initial number and the expansion numbers.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
