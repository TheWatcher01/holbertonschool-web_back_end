/**
 * @file 6-string-interpolation.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description File demonstrates use of template literals for string interpolation in JavaScript.
 */

/**
 * @function getSanFranciscoDescription
 * @description Constructs a descriptive string about San Francisco's financial status.
 * It uses template literals to interpolate variables into the string.
 * @returns {string} A description of San Francisco's income, GDP, and GDP per capita.
 */
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
