/**
 * @file 1-block-scoped.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description: Demonstrates block-scoped variables in JavaScript.
 */

/**
 * Demonstrates block-scoped variables in JavaScript.
 * Declares two constants, `task` and `task2`, and attempts to redeclare them
 * within a conditional block. The redeclarations do not affect the initial
 * declarations due to block scoping. Returns an array of `task` and `task2`.
 *
 * @param {boolean} trueOrFalse - Determines if the conditional block is executed.
 * @returns {Array} An array containing the values of `task` and `task2`.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Attempt to redeclare `task` and `task2` within a block scope.
    // eslint-disable-next-line no-unused-vars
    const task = true;
    // eslint-disable-next-line no-unused-vars
    const task2 = false;
  }

  return [task, task2];
}
