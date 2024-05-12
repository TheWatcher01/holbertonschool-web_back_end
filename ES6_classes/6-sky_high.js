/**
 * @file 6-sky_high.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description Module exports SkyHighBuilding class that extends from Building class.
 */

import Building from './5-building';

/**
 * @class SkyHighBuilding
 * @extends {Building}
 * @description This class represents a sky high building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * @constructor
   * @description Create a sky high building.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super();
    this._floors = floors;
    this._sqft = sqft;
  }

  /**
   * @getter
   * @description Get the number of floors in the building.
   * @return {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * @getter sqft
   * @description Get the square footage of the building.
   * @return {number} The square footage of the building.
   * @override Building
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * @method evacuationWarningMessage
   * @description Generate an evacuation warning message for the building.
   * @return {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
