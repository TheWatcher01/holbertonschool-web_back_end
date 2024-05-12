/**
 * @file 100-evcar.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description This script demonstrates the usage of Symbols in ES6 classes and inheritance.
 */

import Car from './10-car';

// Define a symbol for EVCar
const SymbolForEVCar = Symbol.for('EVCar');

/**
 * @class EVCar
 * @description Represents an Electric Vehicle (EV) Car that extends the Car class.
 */
export default class EVCar extends Car {
  /**
   * @constructor
   * @description Constructs an EVCar instance.
   * @param {string} brand - The brand of the EVCar.
   * @param {string} motor - The motor of the EVCar.
   * @param {string} color - The color of the EVCar.
   * @param {string} range - The range of the EVCar.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
   * @description Gets the EVCar class itself.
   * @return {Function} The EVCar class.
   */
  static get [SymbolForEVCar]() {
    return EVCar;
  }

  /**
   * @method cloneCar
   * @description Clones the EVCar instance into a Car instance.
   * @return {Car} A new Car instance with the same properties as the original EVCar.
   */
  cloneCar() {
    return new Car(this.constructor.Car);
  }
}
