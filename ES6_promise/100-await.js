/**
 * @file 100-await.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description File contains async function that uploads photo & creates user,
 * returning their responses in an object.
 * If any function fails, returns an object with null values.
 */

import { uploadPhoto, createUser } from './utils';

/**
 * @function asyncUploadUser
 * @description Uploads a photo and creates a user.
 * @returns {Promise<Object>} Promise object containing photo & user data, or null if error occurs.
 */
export default async function asyncUploadUser() {
  // Try to upload a photo and create a user.
  try {
    // Wait for both promises to resolveto resolve in parallel...
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    // and return the photo and user data.
    return { photo, user };
  } catch (error) {
    // If any promise fails, return an object with null values.
    return { photo: null, user: null };
  }
}
