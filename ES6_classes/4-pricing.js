/**
 * @file 4-pricing.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This module exports a Pricing class which represents a price in a specific currency.
 */

import Currency from './3-currency';

/**
 * @class Pricing
 * @description This class represents a price in a specific currency.
 */
export default class Pricing {
  /**
   * @constructor
   * @description Create a price.
   * @param {number} amount - The amount of the price.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  /**
   * @setter
   * @description Set the amount of the price.
   * @param {number} amount - The new amount of the price.
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * @getter
   * @description Get the amount of the price.
   * @return {number} The amount of the price.
   */
  get amount() {
    return this._amount;
  }

  /**
   * @setter
   * @description Set the currency of the price.
   * @param {Currency} currency - The new currency of the price.
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  /**
   * @getter
   * @description Get the currency of the price.
   * @return {Currency} The currency of the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * @method displayFullPrice
   * @description Display the full price with the amount and the full currency.
   * @return {string} The full price with the amount and the full currency.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
}
