/**
 * @file 7-has_array_values.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module exports function that checks if all elements in array exist within set.
 */

/**
 * @function hasValuesFromArray
 * @description Checks if all elements in an array exist within a set.
 * @param {Set} set - The Set to check.
 * @param {Array} array - The array of elements to check if they exist in the Set.
 * @returns {boolean} Returns true if all elements in the array exist in the Set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  // Array.prototype.every method checks if all elements in array pass test implemented by...
  // provided function.
  // The Set.prototype.has method checks if an element exists in the Set.
  return array.every((element) => set.has(element));
}
