/**
 * @file 5-typed_arrays.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module exports function that creates Int8Array from ArrayBuffer & sets
 * a value at a specific position.
 */

/**
 * @function createInt8TypedArray
 * @description Creates an Int8Array from an ArrayBuffer and sets a value at a specific position.
 * If the position is outside the range of the ArrayBuffer, an error is thrown.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position in the ArrayBuffer to set the value.
 * @param {number} value - The value to set.
 * @returns {DataView} A DataView representing the ArrayBuffer.
 * @throws {Error} Will throw an error if the position is outside the range of the ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length); // Create a new ArrayBuffer of the specified length.
  const dataView = new DataView(arrayBuffer); // Create a new DataView representing the ArrayBuffer.

  if (position >= length || position < 0) {
    // If the position is outside the range of the ArrayBuffer, throw an error.
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value); // Set the value at the specified position in the ArrayBuffer.

  return dataView; // Return the DataView representing the ArrayBuffer.
}
