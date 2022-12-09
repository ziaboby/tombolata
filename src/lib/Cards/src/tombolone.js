import { NUMBERS } from "./settings";

export function getTomboloneCardsV1() {
  const res = [];
  const allNumbers = NUMBERS.slice(1);
  for (let i = 0; i < 3; i++) {
    const initialIndex = i * 30;
    res[i] = allNumbers.slice(initialIndex, initialIndex + 30);
  }
  return res;
}

export function getTomboloneCardsV2() {
  const cards = [];
  let counter;

  while ((counter = cards.length) < 6) {
    const offset = counter % 2 == 0 ? counter * 15 : (counter - 1) * 15 + 5,
      card = [
        NUMBERS.slice(1 + offset, 6 + offset),
        NUMBERS.slice(11 + offset, 16 + offset),
        NUMBERS.slice(21 + offset, 26 + offset),
      ];
    cards.push(card);
  }

  return cards;
}

export function convertOutputGetTomboloneCardsV2ToV1(aCardsV2) {
  const flatAndSort = function (list) {
    return list.flat(3).sort((a, b) => a - b);
  };
  return [
    flatAndSort([aCardsV2[0], aCardsV2[1]]),
    flatAndSort([aCardsV2[2], aCardsV2[3]]),
    flatAndSort([aCardsV2[4], aCardsV2[5]]),
  ];
}
