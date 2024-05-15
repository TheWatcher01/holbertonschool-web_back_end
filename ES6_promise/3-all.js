/**
 * @file 3-all.js
 * @author TheWatcher01
 * @date 13-05-2024
 * @description
 */

/**
 * @file 8-hbtn_class.js
 * @author TheWatcher01
 * @date 12-05-2024
 * @description Defines the HolbertonClass with size and location properties.
 */

/**
 * @class HolbertonClass
 * @description Represents a HolbertonClass with a size and a location.
 */
export default class HolbertonClass {
    /**
     * @constructor
     * @description Constructs a HolbertonClass instance.
     * @param {number} size - The size of the HolbertonClass.
     * @param {string} location - The location of the HolbertonClass.
     * @throws {TypeError} If size is not a number or location is not a string.
     */
    constructor(size, location) {
      if (typeof size !== 'number') {
        throw new TypeError('Size must be a number');
      }
      if (typeof location !== 'string') {
        throw new TypeError('Location must be a string');
      }
  
      this._size = size;
      this._location = location;
    }
  
    /**
     * @method valueOf
 * @description Gets the value of the HolbertonClass.
     * @return {number} The size of the HolbertonClass.
     */
    valueOf() {
      return this._size;
    }
  
    /**
     * @method toString
     * @description Converts the HolbertonClass object to a string.
     * @return {string} The location of the HolbertonClass.
     */
    toString() {
      return this._location;
    }
  }