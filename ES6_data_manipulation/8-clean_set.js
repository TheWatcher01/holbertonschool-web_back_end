/**
 * @file 8-clean_set.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function that returns string of all set values that start
 * with specific string
 */

export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  if (startString === '') {
    return [...set].join('-');
  }

  const result = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });

  return result.join('-');
}
