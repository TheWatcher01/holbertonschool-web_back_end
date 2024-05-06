/**
 * @file 1-block-scoped.js
 * @author TheWatcher01
 * @date 06-05-2024
 * @description:
 */

export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
