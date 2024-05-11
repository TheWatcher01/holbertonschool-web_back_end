/**
 * @file 1-make_classrooms.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description
 */


export default function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  return [class1, class2, class3];
}
