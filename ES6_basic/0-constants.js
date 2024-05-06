/**
 * @file 0-constants.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description Demonstrates the usage of 'const' and 'let' in JavaScript.
 */

/**
 * @function taskFirst
 * @description Returns a string expressing preference for 'const'.
 * @returns {string} A string expressing preference for 'const'.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

/**
 * @function getLast
 * @description Returns a string expressing conditional acceptance of 'let'.
 * @returns {string} A string expressing conditional acceptance of 'let'.
 */
export function getLast() {
  return ' is okay';
}

/**
 * @function taskNext
 * @description Constructs a string expressing a nuanced view on 'const' and 'let'.
 * @returns {string} A string expressing a nuanced view on 'const' and 'let'.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
