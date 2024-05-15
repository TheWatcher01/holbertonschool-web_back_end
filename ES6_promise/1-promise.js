/**
 * @file 1-promise.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description This file contains the code for a function that returns a promise.
 */

/**
 * @function getFullResponseFromAPI
 * @description Simulates API call by returning promise.
 * Promise will resolve or reject based on 'success' parameter
 * @param {boolean} success - If true, promise will resolve with successful response object.
 * If false, promise will reject with an error.
 * @returns {Promise} - Returns promise that either resolves with object containing status code
 * & body message, or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If the 'success' parameter is true, resolve the promise with a successful response object.
      resolve({ status: 200, body: 'Success' });
    } else {
      // If the 'success' parameter is false, reject the promise with an error.
      reject(new Error('The fake API is not working currently'));
    }
  });
}
