/**
 * @file 100-weak.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function that queries an API and manages request load.
 */

// Create a new WeakMap to store the count of requests made to each endpoint.
export const weakMap = new WeakMap();

/**
 * @function queryAPI
 * @description Queries an API endpoint and manages request load.
 * If an endpoint is queried more than 4 times, an error is thrown.
 * @param {string} endpoint - The API endpoint to query.
 * @throws {Error} Will throw an error if the endpoint load is high (queried more than 4 times).
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    // If the endpoint has not been queried before, set its count to 1.
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 4) {
      // If the count is 4 or more, throw an error.
      throw new Error('Endpoint load is high');
    }
    // If it has been queried before, increment its count.
    weakMap.set(endpoint, count + 1);
  }
}
