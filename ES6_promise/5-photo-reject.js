/**
 * @file 5-photo-reject.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description Function that simulate photo upload failure by returning rejected Promise.
 * The Promise is rejected with an Error object that contains a message indicating
 * the filename cannot be processed.
 */

/**
 * @function uploadPhoto
 * @description A function that simulates a photo upload failure.
 * @param {string} filename - The name of the file to be uploaded
 * @throws {Error} An Error object with a message indicating the filename cannot be processed
 * @returns {Promise<never>} A Promise that is always rejected with an Error
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
