/**
 * @file 5-typed_arrays.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function that returns new ArrayBuffer with Int8
 * value at specific position.
 */

export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  dataView.setInt8(position, value);

  return dataView;
}
