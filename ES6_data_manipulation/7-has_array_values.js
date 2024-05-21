/**
 * @file 7-has_array_values.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function  that returns boolean if all elements in array
 * exist within set.
 */

export default function hasValuesFromArray(Set, Array) {
  return Array.every((element) => Set.has(element));
}
