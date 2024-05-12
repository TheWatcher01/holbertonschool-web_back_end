/**
 * @file 7-airport.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This file defines the Airport class with name and code properties.
 */

/**
 * @class Airport
 * @description A class representing an airport.
 * @property {string} name - The name of the airport.
 * @property {string} code - The code of the airport.
 * @method {string} toString - Convert the airport object to a string.
 */
export default class Airport {
  /**
   * @constructs Airport
   * @description Create an airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * @getter name
   * @description Get the name of the airport.
   * @return {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * @getter code
   * @description Get the code of the airport.
   * @return {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * @setter name
   * @description Set the name of the airport.
   * @param {string} name - The new name of the airport.
   */
  set name(name) {
    this._name = name;
  }

  /**
   * @setter code
   * @description Set the code of the airport.
   * @param {string} code - The new code of the airport.
   */
  set code(code) {
    this._code = code;
  }

  /**
   * @method toString
   * @description Convert the airport object to a string.
   * @return {string} A string representing the airport.
   */
  toString() {
    return `${this._name} (${this._code})`;
  }
}
