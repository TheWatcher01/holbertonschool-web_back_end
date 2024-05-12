/**
 * @file 7-airport.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description Defines the Airport class with name and code properties.
 */

/**
 * @class Airport
 * @description Represents an airport with a name and a code.
 */
export default class Airport {
  /**
   * @constructor
   * @description Constructs an Airport instance.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * @getter name
   * @description Gets the name of the airport.
   * @return {string} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * @getter code
   * @description Gets the code of the airport.
   * @return {string} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * @setter name
   * @description Sets the name of the airport.
   * @param {string} name - The new name of the airport.
   */
  set name(name) {
    this._name = name;
  }

  /**
   * @setter code
   * @description Sets the code of the airport.
   * @param {string} code - The new code of the airport.
   */
  set code(code) {
    this._code = code;
  }

  /**
   * @getter Symbol.toStringTag
   * @description Gets the string tag for the airport object.
   * @return {string} The code of the airport.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }

  /**
   * @method toString
   * @description Converts the airport object to a string.
   * @return {string} A string representing the airport.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
