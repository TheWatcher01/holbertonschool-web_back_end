/**
 * @file 3-all.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description This module contains a function that handles a profile signup.
 */

// Import the necessary functions from the utils module
import { uploadPhoto, createUser } from './utils';

/**
 * @function handleProfileSignup
 * @description Function handles profile signup by uploading photo and creating user concurrently.
 * If both promises resolve, it logs photo body & user's first & last name.
 * If either promise rejects, it logs message indicating that signup system is offline.
 * @returns {Promise<void>} - Returns promise that either resolves with no value after logging
 * photo body & user's first and last name, or rejects with no value after logging message
 * indicating that signup system is offline.
 */
export default function handleProfileSignup() {
  // Return a promise that resolves when both the uploadPhoto and createUser promises have resolved
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      // Log the photo body and user's first and last name when both promises resolve
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      // Log a message indicating that the signup system is offline when either promise rejects
      console.log('Signup system offline');
    });
}
