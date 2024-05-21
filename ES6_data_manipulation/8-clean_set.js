/**
 * @file 8-clean_set.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module exports function that returns string of all set values that start
 * with a specific string, separated by hyphens.
 */

/**
 * @function cleanSet
 * @description Returns string of all set values that start with specific string,
 * separated by hyphens.
 * If the input is not a Set or the startString is not a string, returns an empty string.
 * If the startString is empty, returns a string of all set values, separated by hyphens.
 * @param {Set} set - The Set to process.
 * @param {string} startString - The string to check if the set values start with.
 * @returns {string} String of all set values that start with the startString, separated by hyphens.
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    // If the input is not a Set or the startString is not a string, return an empty string.
    return '';
  }

  if (startString === '') {
    // If the startString is empty, return a string of all set values, separated by hyphens.
    return [...set].join('-');
  }

  const result = []; // Initialize an empty array to store the processed set values.

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // If set value starts with startString, & it to result array after removing startString.
      result.push(value.slice(startString.length));
    }
  });

  // Return a string of all set values that start with the startString, separated by hyphens.
  return result.join('-');
}
