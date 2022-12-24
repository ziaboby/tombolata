import { COLUMN_KEYS } from "./settings";
import { getRow } from "./row";

/**
 * Get a random card
 * @param {object} sourceRef - object containing all the available numbers grouped by col key
 * @returns {object}
 */
export function getCard(sourceRef) {
  return createRows(sourceRef);
}

/**
 * Recursive function to create a three row card
 * @param {object} source - object containing all the available numbers grouped by col key
 * @param {array} rows - list of row of a card
 * @returns {object}
 */
export function createRows(source, rows = []) {
  const { row, updatedSource } = getRow(
    getSuitableCols(COLUMN_KEYS, source),
    source
  );

  if (rows.length == 2) {
    return {
      updatedSource,
      rows: [...rows, row],
    };
  }

  return createRows(updatedSource, [...rows, row]);
}

/**
 * Filter columns based of the row about to be created
 * @param {array} aColumnKeys - list of available columns
 * @param {object} source - object containing all the available numbers grouped by col key
 * @returns {array}
 */
export function getSuitableCols(aColumnKeys, source) {
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
