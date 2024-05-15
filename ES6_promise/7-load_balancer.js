/**
 * @file 7-load_balancer.js
 * @author TheWatcher01
 * @date 15-05-2024
 * @description This module exports a function that simulates a load balancer.
 * It's simulates load balancer by returning result of 1st Promise that fulfills or rejects.
 * It uses Promise.race to handle the two input Promises, chinaDownload and USDownload.
 */

/**
 * @function loadBalancer
 * @description Simulates a load balancer
 * @param {Promise} chinaDownload - The Promise from China
 * @param {Promise} USDownload - The Promise from US
 * @returns {Promise} - The Promise that fulfills or rejects first
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race returns promise that fulfills or rejects as soon as one of promises in iterable
  // fulfills or rejects, with the value or reason from that promise.
  return Promise.race([chinaDownload, USDownload]);
}
