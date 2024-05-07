/**
 * @file 9-getFullBudget.js
 * @author TheWatcher01
 * @date 07-05-2024
 * @description File contains function that creates full budget object from given parameters.
 */

import getBudgetObject from './7-getBudgetObject';

/**
 * @function getFullBudgetObject
 * @description Constructs a full budget object from given income, GDP, and GDP per capita values.
 *              The full budget object includes methods to get income in dollars and euros.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The GDP per capita value.
 * @returns {Object} A full budget object containing the income, GDP, GDP per capita, and methods
 *                   to get income in dollars and euros.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    /**
     * @method getIncomeInDollars
     * @description Converts the income value to a string representation in dollars.
     * @param {string} income - The income value.
     * @returns {string} The income value in dollars.
     */
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    /**
     * @method getIncomeInEuros
     * @description Converts the income value to a string representation in euros.
     * @param {string} income - The income value.
     * @returns {string} The income value in euros.
     */
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
