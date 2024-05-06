/**
 * @file 2-arrow.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description: Demonstrates the use of arrow functions in JavaScript.
 */

/**
 * @function getNeighborhoodsList
 * @description: Function initializes a list of San Francisco neighborhoods and provides
 * a method to add new neighborhoods to the list. The method uses an arrow
 * function, which provides lexical binding of `this`.
 *
 * @returns {Object} An object with a property `sanFranciscoNeighborhoods`
 *                   (an array of neighborhoods), and a method `addNeighborhood`
 *                   to add new neighborhoods to the array.
 */
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  /**
   * Adds a new neighborhood to the list. This is an arrow function, so it
   * lexically binds `this` to the context of `getNeighborhoodsList`, allowing
   * us to modify `sanFranciscoNeighborhoods`.
   *
   * @param {string} newNeighborhood - The new neighborhood to add.
   * @returns {Array} The updated list of neighborhoods.
   */
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
