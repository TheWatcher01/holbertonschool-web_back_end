/**
 * @file 10-car.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This script demonstrates the usage of Symbols in ES6 classes.
 */

/**
 * @class Car
 * @description Represents a Car with a brand, motor, and color.
 */
export default class Car {
  /**
   * @constructor
   * @description Constructs a Car instance.
   * @param {string} brand - The brand of the Car.
   * @param {string} motor - The motor of the Car.
   * @param {string} color - The color of the Car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * @method cloneCar
   * @description Clones the Car instance.
   * @return {Car} A new Car instance with the same properties as the original.
   */
  cloneCar() {
    const SymbolForCar = Symbol.for('Car');
    return new this.constructor[SymbolForCar]();
  }

  /**
   * @getter brand
   * @description Gets the brand of the Car.
   * @return {string} The brand of the Car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * @getter motor
   * @description Gets the motor of the Car.
   * @return {string} The motor of the Car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * @getter color
   * @description Gets the color of the Car.
   * @return {string} The color of the Car.
   */
  get color() {
    return this._color;
  }

  /**
   * @static [Symbol.for('Car')]
   * @description Gets the Car class itself.
   * @return {Function} The Car class.
   */
  static get [Symbol.for('Car')]() {
    return this;
  }
}
