/**
 * @file 9-try.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description This file contains a function that executes another function and handles errors.
 */

/**
 * @function guardrail
 * @description Executes a math function and handles any errors.
 * @param {Function} mathFunction Function to be executed.
 * @throws {Error} Any error that occurs during the mathFunction execution.
 * @returns {Array} An array containing the result or error message, and a guardrail message.
 */
export default function guardrail(mathFunction) {
  // Create an empty queue array to store the result or error message.
  const queue = [];

  try {
    // Try to execute the mathFunction and ...
    const result = mathFunction();
    // If successful, push the result to the queue.
    queue.push(result);

    // If an error occurs, catch it and ...
  } catch (error) {
    // Push the error message to the queue. (toString() is used to convert error object to string.
    queue.push(error.toString());
  }

  // Finally, push the guardrail message to the queue.
  queue.push('Guardrail was processed');

  // Return the queue array.
  return queue;
}
