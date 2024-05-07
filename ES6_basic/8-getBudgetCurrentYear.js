/**
 * @file 8-getBudgetCurrentYear.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description This module contains functions to get the current year and to calculate the budget.
 */

/**
 * @function getCurrentYear
 * @description Gets the current year.
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

/**
 * @function getBudgetForCurrentYear
 * @description Calculates the budget for the current year.
 * @param {number} income - The income for the current year.
 * @param {number} gdp - The Gross Domestic Product for the current year.
 * @param {number} capita - The capita for the current year.
 * @returns {object} An object containing the income, gdp, and capita for the current year.
 */
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
