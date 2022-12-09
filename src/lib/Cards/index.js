import { SOURCES, MAX_CARDS_WITHOUT_DOUBLES } from "./src/settings";
import { extractNumberAndUpdateSource, getRow } from "./src/row";
import { getSuitableCols, getCard } from "./src/card";
import {
  getTomboloneCardsV1,
  getTomboloneCardsV2,
  convertOutputGetTomboloneCardsV2ToV1,
} from "./src/tombolone";

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
  getRow,
  getSuitableCols,
  getCard,
  getCards,
  getTomboloneCardsV1,
  getTomboloneCardsV2,
  convertOutputGetTomboloneCardsV2ToV1,
};

export default {
  getCards,
  getTomboloneCardsV1,
  getTomboloneCardsV2,
  convertOutputGetTomboloneCardsV2ToV1,
};
