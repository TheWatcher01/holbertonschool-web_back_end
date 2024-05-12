/**
 * @file 9-hoisting.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This script demonstrates class usage and fixing hoisting issues in ES6.
 */

/**
 * @class HolbertonClass
 * @description Represents a HolbertonClass with a year and a location.
 */
export class HolbertonClass {
  /**
   * @constructor
   * @description Constructs a HolbertonClass instance.
   * @param {number} year - The year of the HolbertonClass.
   * @param {string} location - The location of the HolbertonClass.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * @method year
   * @description Gets the year of the HolbertonClass.
   * @return {number} The year of the HolbertonClass.
   */
  get year() {
    return this._year;
  }

  /**
   * @method location
   * @description Gets the location of the HolbertonClass.
   * @return {string} The location of the HolbertonClass.
   */
  get location() {
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

/**
 * @class StudentHolberton
 * @description Represents a StudentHolberton with a first name, last name, and a HolbertonClass.
 */
export class StudentHolberton {
  /**
   * @constructor
   * @description Constructs a StudentHolberton instance.
   * @param {string} firstName - The first name of the StudentHolberton.
   * @param {string} lastName - The last name of the StudentHolberton.
   * @param {HolbertonClass} holbertonClass - The HolbertonClass of the StudentHolberton.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * @method fullName
   * @description Gets the full name of the StudentHolberton.
   * @return {string} The full name of the StudentHolberton.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * @method holbertonClass
   * @description Gets the HolbertonClass of the StudentHolberton.
   * @return {HolbertonClass} The HolbertonClass of the StudentHolberton.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * @method fullStudentDescription
   * @description Gets a string that describes the StudentHolberton.
   * @return {string} A string that describes the StudentHolberton.
   */
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
