/**
 * @file 4-rest-parameter.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description Demonstrates the use of rest parameters in JavaScript.
 */

/**
 * @function returnHowManyArguments
 * @description Accepts any number of arguments and returns the count of arguments.
 * It uses the rest parameter syntax to collect all arguments into an array.
 * @param {...any} args - The arguments passed to the function.
 * @returns {number} The count of arguments passed to the function.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
