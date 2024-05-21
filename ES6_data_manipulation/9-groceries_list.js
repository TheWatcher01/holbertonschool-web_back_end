/**
 * @file 9-groceries_list.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module exports function that returns a Map of groceries with their quantities.
 */

/**
 * @function groceriesList
 * @description Creates a Map of groceries with their quantities.
 * The keys are the grocery items, and the values are their quantities.
 * @returns {Map} A Map of groceries. Keys are grocery items, & values are their quantities.
 */
export default function groceriesList() {
  const groceries = new Map();
  // Set the quantity of 'Apples' to 10
  groceries.set('Apples', 10);
  // Set the quantity of 'Tomatoes' to 10
  groceries.set('Tomatoes', 10);
  // Set the quantity of 'Pasta' to 1
  groceries.set('Pasta', 1);
  // Set the quantity of 'Rice' to 1
  groceries.set('Rice', 1);
  // Set the quantity of 'Banana' to 5
  groceries.set('Banana', 5);

  // Return the Map of groceries
  return groceries;
}
