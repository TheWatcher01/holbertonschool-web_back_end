/**
 * @file 10-update_uniq_items.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function that updates the quantity of unique items in a Map.
 */

/**
 * @function updateUniqueItems
 * @description Updates the quantity of unique items in a Map.
 * If an item's quantity is 1, it is updated to 100.
 * If the input is not a Map, an error is thrown.
 * @param {Map} map - Map to update. The keys are the items, and the values are their quantities.
 * @throws {Error} Will throw an error if the input is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    // If the input is not a Map, throw an error.
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      // If an item's quantity is 1, update it to 100.
      map.set(key, 100);
    }
  });
}
