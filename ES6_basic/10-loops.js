/**
 * @file 10-loops.js
 * @author TheWatcher01
 * @date 07-05-2024
 * @description This module exports a function that appends a string to each value in an array.
 */

/**
 * @function appendToEachArrayValue
 * @description Appends a given string to each value in the provided array and returns a new array.
 * @param {Array} array - The array containing the values to which the string will be appended.
 * @param {string} appendString - The string to append to each array value.
 * @returns {Array} A new array with the appended string added to each value.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
