import { getRandom } from "../../utils";

/**
 * Generate a five number row
 * @param {array} aColKeys
 * @param {object} source
 * @returns {object}
 */
export function getRow(aColKeys, source) {
  let extractedColsCounter = -1,
    aColKeysLocal = aColKeys.slice(0),
    updatedSourceLocal = { ...source },
    row = [];

  while (++extractedColsCounter < 5) {
    const extractedColIndex = getRandom(0, aColKeysLocal.length - 1),
      extractedCol = aColKeysLocal[extractedColIndex];

    aColKeysLocal = aColKeysLocal.filter((item) => item != extractedCol);

    const { extractedNumber, updatedSource } = extractNumberAndUpdateSource(
      updatedSourceLocal,
      extractedCol
    );

    updatedSourceLocal = { ...updatedSource };

    row.push(extractedNumber);
  }

  return {
    updatedSource: { ...updatedSourceLocal },
    row: row.slice(0).sort((nA, nB) => nA - nB),
  };
}

/**
 * Extract a random number from the required column and removed it from the source object
 * @param {object} source - object containing all the available numbers grouped by col key
 * @param {string} nColKey - column identifier
 * @returns {object}
 */
export function extractNumberAndUpdateSource(source, nColKey) {
  const aColNumbers = source[nColKey].slice(0),
    extractedNumberIndex = getRandom(0, aColNumbers.length - 1),
    extractedNumber = source[nColKey][extractedNumberIndex];

  return {
    extractedNumber,
    updatedSource: {
      ...source,
      [nColKey]: aColNumbers.filter((item) => item != extractedNumber),
    },
  };
}
