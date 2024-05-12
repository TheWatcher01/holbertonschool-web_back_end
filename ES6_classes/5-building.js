/**
 * @file 5-building.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This module exports a Building class.
 */

/**
 * @class Building
 * @description This class represents a building.
 */
export default class Building {
  /**
   * @constructor
   * @description Create a building.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} Throws error if class extending Building does not override
   * evacuationWarningMessage method.
   */
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * @getter
   * @description Get the square footage of the building.
   * @return {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * @setter
   * @description Set the square footage of the building.
   * @param {number} newSqft - The new square footage of the building.
   */
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
