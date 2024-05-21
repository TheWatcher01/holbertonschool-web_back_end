/**
 * @file 9-groceries_list.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module contains a function that returns a map of groceries with their quantity.
 */

export default function groceriesList() {
  const groceries = new Map();
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
