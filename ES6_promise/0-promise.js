/**
 * @file 0-promise.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description This module contains a function that returns a new Promise.
 */

/**
 * @function getResponseFromAPI
 * @description Returns a new Promise that resolves to 'Request successful'.
 * @returns {Promise<string>} A Promise that resolves to a string.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (typeof resolve !== 'function') {
      throw new TypeError('Resolve must be a function');
    }
    if (typeof reject !== 'function') {
      throw new TypeError('Reject must be a function');
    }

    resolve('Request successful');
  });
}
