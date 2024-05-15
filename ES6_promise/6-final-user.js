/**
 * @file 6-final-user.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description Module handles profile signup process by managing multiple promises by calling
 * functions signUpUser and uploadPhoto functions.
 * It waits for both promises to settle & then returns an array of objects.
 * Each object represents outcome of a promise (either fulfilled or rejected).
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * @function handleProfileSignup
 * @description Handle the profile signup
 * @param {string} firstName - First name of the user
 * @param {string} lastName - Last name of the user
 * @param {string} fileName - File name of the photo
 * @returns {Promise} - Returns a promise that resolves to an array of objects
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create two promises using signUpUser
  const userPromise = signUpUser(firstName, lastName);
  // Create a promise using uploadPhoto
  const photoPromise = uploadPhoto(fileName);

  // Waiting for all promises to settle
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => {
      // If promise is fulfilled, return object with status and value
      if (result.status === 'fulfilled') {
        return { status: 'fulfilled', value: result.value };
      }

      // If promise is rejected, return object with status and value
      return { status: 'rejected', value: result.reason.toString() };
    }));
}
