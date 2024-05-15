/**
 * @file 8-try.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description The file contains function that divides two numbers.
 */

/**
 * @function divideFunction
 * @description divides two numbers & throws an error if denominator is zero.
 * @param {number} numerator
 * @param {number} denominator
 * @throws {Error} cannot divide by 0
 * @returns {number} result of the division
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0
  if (denominator === 0) {
    // If it is, throw an error and stop the execution (same as else block)
    throw new Error('cannot divide by 0');
  }
  // Otherwise, return the result of the division
  return numerator / denominator;
}
