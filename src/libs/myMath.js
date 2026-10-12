/**
 *  My math library
 * @module myMath
 */


/**
 * Adds two numbers.
 * @param {number} x - first number 
 * @param {number} y - second number
 * @returns {number} The sum of x and y
 */
const add = (x, y) => x + y;

/**
 * 
 * @param {number} x First number
 * @param {number} y Second number
 * @returns {number} The subtraction of x and y
 */
const subtract = (x, y) => x - y;

module.exports = {
    add,
    subtract,
}