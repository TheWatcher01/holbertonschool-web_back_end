/**
 * @file 3-currency.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This module exports a Currency class.
 */

/**
 * @class Currency
 * @description This class represents a currency.
 */
export default class Currency {
  /**
   * @constructor
   * @description Create a currency.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * @getter
   * @description Get the currency code.
   * @return {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * @setter
   * @description Set the currency code.
   * @param {string} newCode - The new currency code.
   */
  set code(newCode) {
    this._code = newCode;
  }

  /**
   * @getter
   * @description Get the currency name.
   * @return {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * @setter
   * @description Set the currency name.
   * @param {string} newName - The new currency name.
   */
  set name(newName) {
    this._name = newName;
  }

  /**
   * @method displayFullCurrency
   * @description Display the full currency name and code.
   * @return {string} The full currency name and code.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  /**
   * @static convert
   * @description Convert an amount at a given rate.
   * @param {number} amount - The amount to convert.
   * @param {number} rate - The conversion rate.
   * @return {number} The converted amount.
   */
  static convert(amount, rate) {
    return amount * rate;
  }
}
