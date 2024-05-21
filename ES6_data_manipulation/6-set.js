/**
 * @file 6-set.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function that returns a Set of unique elements from an array.
 */

/**
 * @function setFromArray
 * @description Creates Set from an array. The Set will automatically remove any duplicate elements.
 * @param {Array} array - The array to convert into a Set.
 * @returns {Set} A Set of unique elements from the input array.
 */
export default function setFromArray(array) {
  // The Set constructor takes an iterable object, like an array, and creates a new Set out of it.
  // Any duplicate elements in the array will be removed in the Set.
  return new Set(array);
}
