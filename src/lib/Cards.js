import { getRandom } from "./utils";

const MAX_CARDS_WITHOUT_DOUBLES = 6,
  MAX_EMPTY_SPACES_09 = 9,
  MAX_EMPTY_SPACES = 8,
  MAX_EMPTY_SPACES_90 = 7,
  EMPTY_SPACES = new Array(91).fill(""),
  NUMBERS = Object.keys(EMPTY_SPACES),
  COLUMN_KEYS = [1, 10, 20, 30, 40, 50, 60, 70, 80],
  SOURCES = {
    [COLUMN_KEYS[0]]: [
      ...NUMBERS.slice(1, 10),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES_09),
    ],
    [COLUMN_KEYS[1]]: [
      ...NUMBERS.slice(10, 20),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[2]]: [
      ...NUMBERS.slice(20, 30),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[3]]: [
      ...NUMBERS.slice(30, 40),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[4]]: [
      ...NUMBERS.slice(40, 50),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[5]]: [
      ...NUMBERS.slice(50, 60),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[6]]: [
      ...NUMBERS.slice(60, 70),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[7]]: [
      ...NUMBERS.slice(70, 80),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES),
    ],
    [COLUMN_KEYS[8]]: [
      ...NUMBERS.slice(80, 91),
      ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES_90),
    ],
  };

/**
 * Generate a five number row
 * @param {array} aColKeys
 * @param {object} source
 * @param {object} updatedColCounter
 * @returns
 */
function getRow(aColKeys, source, updatedColCounter = {}) {
  const updatedColCounterLocal = { ...updatedColCounter };
  let extractedColsCounter = -1,
    aColKeysLocal = aColKeys.slice(0),
    updatedSourceLocal = { ...source },
    row = [];

  while (++extractedColsCounter < 5) {
    const extractedColIndex = getRandom(0, aColKeysLocal.length - 1),
      extractedCol = aColKeysLocal[extractedColIndex];

    aColKeysLocal = aColKeysLocal.filter((item) => item != extractedCol);

    updatedColCounterLocal[extractedCol] = updatedColCounterLocal[extractedCol]
      ? updatedColCounterLocal[extractedCol] + 1
      : 1;

    const { extractedNumber, updatedSource } = extractNumberAndUpdateSource(
      updatedSourceLocal,
      extractedCol
    );

    updatedSourceLocal = { ...updatedSource };

    row.push(extractedNumber);
  }

  return {
    updatedColCounter: { ...updatedColCounterLocal },
    updatedSource: { ...updatedSourceLocal },
    row: row.slice(0).sort(),
  };
}

/**
 * Extract a random number from the required column and removed it from the source object
 * @param {object} source
 * @param {string} nColKey
 * @returns
 */
function extractNumberAndUpdateSource(source, nColKey) {
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

function Card() {
  /**
   * first row - 5 random col i, contando quelle uscite
   *    estrarre un numero random da ciascuna colonna uscita precedentemente ed eliminarla da TOT
   * second row - 5 random con i, contando quelle uscite
   * third row - 5 random con i, partendo da un array che esclude le col già uscite 2 volte
   */
}

export default {
  extractNumberAndUpdateSource,
  getRow,
};
