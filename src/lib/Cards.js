import { getRandom } from "./utils";

const MAX_CARDS_WITHOUT_DOUBLES = 6,
  EMPTY_SPACES = new Array(91).fill(""),
  NUMBERS = Object.keys(EMPTY_SPACES).map(Number),
  COLUMN_KEYS = [1, 10, 20, 30, 40, 50, 60, 70, 80],
  SOURCES = {
    [COLUMN_KEYS[0]]: [...NUMBERS.slice(1, 10)],
    [COLUMN_KEYS[1]]: [...NUMBERS.slice(10, 20)],
    [COLUMN_KEYS[2]]: [...NUMBERS.slice(20, 30)],
    [COLUMN_KEYS[3]]: [...NUMBERS.slice(30, 40)],
    [COLUMN_KEYS[4]]: [...NUMBERS.slice(40, 50)],
    [COLUMN_KEYS[5]]: [...NUMBERS.slice(50, 60)],
    [COLUMN_KEYS[6]]: [...NUMBERS.slice(60, 70)],
    [COLUMN_KEYS[7]]: [...NUMBERS.slice(70, 80)],
    [COLUMN_KEYS[8]]: [...NUMBERS.slice(80, 91)],
  };

/**
 * Generate a five number row
 * @param {array} aColKeys
 * @param {object} source
 * @param {object} updatedColCounter
 * @returns {object}
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
    row: row.slice(0).sort((nA, nB) => nA - nB),
  };
}

/**
 * Extract a random number from the required column and removed it from the source object
 * @param {object} source - object containing all the available numbers grouped by col key
 * @param {string} nColKey - column identifier
 * @returns {object}
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

/**
 * Get a random card
 * @param {object} sourceRef - object containing all the available numbers grouped by col key
 * @returns {object}
 */
function getCard(sourceRef) {
  return createRows(sourceRef, {});
}

/**
 * Recursive function to create a three row card
 * @param {object} source - object containing all the available numbers grouped by col key
 * @param {object} colCounter - object with key the column identifier and with value the counter of numbers from a column already used in the current card
 * @param {array} rows - list of row of a card
 * @returns {object}
 */
function createRows(source, colCounter, rows = []) {
  const { row, updatedSource, updatedColCounter } = getRow(
    getSuitableCols(COLUMN_KEYS, source),
    source,
    colCounter
  );

  if (rows.length == 2) {
    return {
      updatedSource,
      rows: [...rows, row],
    };
  }

  return createRows(updatedSource, updatedColCounter, [...rows, row]);
}

/**
 * Filter columns based of the row about to be created
 * @param {array} aColumnKeys - list of available columns
 * @param {object} colCounter - object with key the column identifier and with value the counter of numbers from a column already used in the current card
 * @param {object} source - object containing all the available numbers grouped by col key
 * @returns {array}
 */
function getSuitableCols(aColumnKeys, source) {
  const aColsOrderedByUnusedNumbers = Object.entries(source)
    .map(([colKey, numbers]) => [+colKey, numbers.length])
    .sort((colA, colB) => colB[1] - colA[1]);

  if (aColsOrderedByUnusedNumbers.at(-1)[1] > 3) {
    return aColumnKeys.slice(0);
  }

  const aFilteredColsOrderedByUnusedNumbers = aColsOrderedByUnusedNumbers
    .filter((item) => item[1] != 0)
    .map((item) => item[0]);

  return aFilteredColsOrderedByUnusedNumbers.slice(0, 5);
}

/**
 * Generate cards
 * @param {number} nRequiredCards
 * @returns {array}
 */
function getCards(nRequiredCards = MAX_CARDS_WITHOUT_DOUBLES) {
  let cards = [],
    sourceLocal = structuredClone(SOURCES);

  while (cards.length < nRequiredCards) {
    if (cards.length == MAX_CARDS_WITHOUT_DOUBLES) {
      sourceLocal = structuredClone(SOURCES);
    }

    const { rows, updatedSource } = getCard(sourceLocal);
    cards.push(rows);
    sourceLocal = { ...updatedSource };
  }
  return cards;
}

export const test = {
  SOURCES,
  extractNumberAndUpdateSource,
  getSuitableCols,
  getRow,
  getCard,
  getCards,
};

export default { getCards };
