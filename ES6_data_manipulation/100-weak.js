/**
 * @file 100-weak.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function that queries API and returns data.
 */

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  }
}
