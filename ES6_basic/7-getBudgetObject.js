/**
 * @file 7-getBudgetObject.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description This file contains a function that creates a budget object from given parameters.
 */

/**
 * @function getBudgetObject
 * @description Constructs a budget object from given income, GDP, and GDP per capita values.
 * @param {string} income - The income value.
 * @param {string} gdp - The GDP value.
 * @param {string} capita - The GDP per capita value.
 * @returns {Object} A budget object containing the income, GDP, and GDP per capita.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
