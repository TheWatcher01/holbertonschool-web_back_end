/**
 * @file 10-update_uniq_items.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function that returns updated map of all items with
 * their initial quantity.
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
