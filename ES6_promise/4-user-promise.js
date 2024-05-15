/**
 * @file 4-user-promise.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description This module exports a function that simulates user signup with a Promise.
 */

/**
 * @description Simulates user signup by returning a Promise that resolves to an object.
 * The object contains the first and last name of the user.
 * @function signUpUser
 * @param {string} firstName - The first name of the user
 * @param {string} lastName - The last name of the user
 * @returns {Promise<{firstName: string, lastName: string}>} - A Promise that resolves to an object
 */
export default function signUpUser(firstName, lastName) {
  // Return a Promise that resolves to an object with the user's first and last name
  return Promise.resolve({
    firstName,
    lastName,
  });
}
