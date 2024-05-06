/**
 * @file 5-spread-operator.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description Demonstrates the use of spread operator in JavaScript.
 */

/**
 * @function concatArrays
 * @description Concatenates two arrays and each character of a string into a new array.
 * It uses the spread operator to spread the elements of the arrays and the string.
 * @param {Array} array1 - The first array to concatenate.
 * @param {Array} array2 - The second array to concatenate.
 * @param {string} string - The string to spread into individual characters.
 * @returns {Array} The new array containing the elements of array1, array2, and string.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
