/**
 * @file 101-iterateThroughObject.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description Module exports function that iterates through a report object using its iterator and
 * returns a string of names separated by ' | '.
 */

/**
 * @function iterateThroughObject
 * @description Iterates through report object using its iterator, collects all names, & returns
 * them as string separated by ' | '.
 * The report object should be an iterable (i.e., it should have a [Symbol.iterator] method).
 *
 * @param {Object} reportWithIterator - Report object with an iterator.
 * The iterator should yield names (strings).
 * @returns {string} String of all names yielded by iterator of report object, separated by ' | '.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to hold all names
  const names = [];

  // Iterate over each name yielded by the iterator of the report object
  for (const name of reportWithIterator) {
    // Add the name to the names array
    names.push(name);
  }

  // Join all names with ' | ' and return the resulting string
  return names.join(' | ');
}
