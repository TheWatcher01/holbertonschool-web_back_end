/**
 * @file 0-constants.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description: This file contains three functions that return strings related to the
 * usage of 'const' and 'let' in JavaScript.
 */

/**
 * @function
 * @name taskFirst
 * @description: This function returns a string.
 * @returns {string}
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * @function
 * @name getLast
 * @description: This function returns a string.
 * @returns {string}
 */
export function getLast() {
  return ' is okay';
}

/**
 * @function
 * @name taskNext
 * @description: This function returns a string.
 * @returns {string}
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
