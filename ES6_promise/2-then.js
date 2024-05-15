/**
 * @file 2-then.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description Handles response from a promise (typically from an API call).
 */

/**
 * @function handleResponseFromAPI
 * @description Handles a promise, logs a message if it resolves, returns a response object.
 * If it rejects, returns a new Error object.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} - Resolves with a response object or rejects with an Error object.
 */
export default function handleResponseFromAPI(promise) {
  // Return the promise after attaching then and catch handlers
  return promise
    .then(() => {
      // Log a success message to the console when the promise resolves
      console.log('Got a response from the API');
      // Return a response object with a status of 200 and a body of 'success'
      return {
        status: 200,
        body: 'success',
      };
    })

    // Return a new Error object when the promise rejects
    .catch(() => new Error('The promise was rejected'));
}
