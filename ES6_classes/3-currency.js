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
  #code;
  #name;

  /**
   * @constructor
   * @description Create a currency.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    this.#code = code;
    this.#name = name;
  }

  /**
   * @getter
   * @description Get the currency code.
   * @return {string} The currency code.
   */
  get code() {
    return this.#code;
  }

  /**
   * @setter
   * @description Set the currency code.
   * @param {string} newCode - The new currency code.
   */
  set code(newCode) {
    this.#code = newCode;
  }

  /**
   * @getter
   * @description Get the currency name.
   * @return {string} The currency name.
   */
  get name() {
    return this.#name;
  }

  /**
   * @setter
   * @description Set the currency name.
   * @param {string} newName - The new currency name.
   */
  set name(newName) {
    this.#name = newName;
  }

  /**
   * @method displayFullCurrency
   * @description Display the full currency name and code.
   * @return {string} The full currency name and code.
   */
  displayFullCurrency() {
    return `${this.#name} (${this.#code})`;
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
