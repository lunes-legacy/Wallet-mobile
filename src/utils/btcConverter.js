/*eslint-disable*/

/**
 * @module satoshi-bitcoin
 */

import Big from 'big.js';

// @private
const conversion = 100000000;

// es6 polyfill
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 === 0;
  };
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}

export default {
  /**
   * Convert Satoshi to Bitcoin
   * @param {number|string} satoshi Amount of Satoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
  toBitcoin(satoshi) {
    // validate arg
    let satoshiType = typeof satoshi;
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi);
      satoshiType = 'number';
    }
    if (satoshiType !== 'number') {
      throw new TypeError(`toBitcoin must be called on a number or string, got ${satoshiType}`);
    }
    if (!Number.isInteger(satoshi)) {
      throw new TypeError(
        'toBitcoin must be called on a whole number or string format whole number'
      );
    }

    const bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion));
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number|string} bitcoin Amount of Bitcoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshi(bitcoin) {
    // validate arg
    let bitcoinType = typeof bitcoin;
    if (bitcoinType === 'string') {
      bitcoin = toNumber(bitcoin);
      bitcoinType = 'number';
    }
    if (bitcoinType !== 'number') {
      throw new TypeError(`toSatoshi must be called on a number or string, got ${bitcoinType}`);
    }

    const bigBitcoin = new Big(bitcoin);
    return Number(bigBitcoin.times(conversion));
  }
};
