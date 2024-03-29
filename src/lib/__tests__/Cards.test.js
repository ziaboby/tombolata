import * as Utils from "../utils";
import { test as Lib } from "../Cards/index";

describe("Cards - Test Tombolone - Cards generation utils function", () => {
  let getRandomSpy;

  beforeAll(() => {
    getRandomSpy = jest.spyOn(Utils, "getRandom");
  });

  afterEach(() => {
    getRandomSpy.mockReset && getRandomSpy.mockReset();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("Should extract a random number and remove it from source - extractNumberAndUpdateSource", () => {
    // return index at index 2
    getRandomSpy.mockReturnValueOnce(2);

    const output = Lib.extractNumberAndUpdateSource(
      { 1: [1, 2, 3, 4, 5], 2: [2, 4, 6, 8, 10] },
      1
    );

    expect(getRandomSpy).toHaveBeenCalled();
    expect(output.extractedNumber).toBe(3);
    expect(output.updatedSource[1]).toEqual(expect.not.arrayContaining([3]));
  });

  test("Should create a five number row, taking a single item per column, without counter object", () => {
    getRandomSpy.mockReturnValue(0);
    const output = Lib.getRow([1, 2, 3, 4, 5, 6, 7], {
      1: [11, 12, 13],
      2: [21, 22, 23],
      3: [31, 32, 33],
      4: [41, 42, 43],
      5: [51, 52, 53],
      6: [61, 62, 63],
      7: [71, 72, 73],
    });

    expect(output.row).toEqual([11, 21, 31, 41, 51]);
    expect(output.updatedSource).toEqual({
      1: [12, 13],
      2: [22, 23],
      3: [32, 33],
      4: [42, 43],
      5: [52, 53],
      6: [61, 62, 63],
      7: [71, 72, 73],
    });
  });

  test("Should return a row with sorted numbers", () => {
    getRandomSpy.mockReturnValue(0);
    const output = Lib.getRow([1, 2, 3, 4, 0], {
      0: [1, 2, 3],
      1: [11, 12, 13],
      2: [21, 22, 23],
      3: [31, 32, 33],
      4: [41, 42, 43],
    });

    expect(output.row).toEqual(expect.arrayContaining([1, 11, 21, 31, 41]));
  });

  test("Should create a five number row, taking a single item per column, with counter object", () => {
    getRandomSpy.mockReturnValue(0);
    const output = Lib.getRow([1, 2, 3, 4, 5, 6, 7], {
      1: [11, 12, 13],
      2: [21, 22, 23],
      3: [31, 32, 33],
      4: [41, 42, 43],
      5: [51, 52, 53],
      6: [61, 62, 63],
      7: [71, 72, 73],
    });

    expect(output.row).toEqual([11, 21, 31, 41, 51]);
    expect(output.updatedSource).toEqual({
      1: [12, 13],
      2: [22, 23],
      3: [32, 33],
      4: [42, 43],
      5: [52, 53],
      6: [61, 62, 63],
      7: [71, 72, 73],
    });
  });

  test("Should return the list of cols where retrieving numbers", () => {
    getRandomSpy.mockReturnValue(0);
    expect(
      Lib.getSuitableCols(
        [1, 10, 20, 30, 40, 50, 60, 70, 80],
        structuredClone(Lib.SOURCES)
      )
    ).toEqual([1, 10, 20, 30, 40, 50, 60, 70, 80]);

    expect(
      Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80], {
        1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        10: [11, 12, 13, 14, 15, 16, 17, 18, 19],
        20: [21, 22, 23],
        30: [31, 32, 33, 34, 35, 36, 37, 38, 39],
        40: [41, 42, 43, 44, 45, 46, 47, 48, 49],
        50: [51, 52, 53, 54, 55, 56, 57, 58, 59],
        60: [61, 62, 63, 64, 65, 66, 67, 68, 69],
        70: [71, 72, 73, 74, 75, 76, 77, 78, 79],
        80: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
      })
    ).toEqual([80, 1, 10, 30, 40]);

    expect(
      Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80], {
        1: [],
        10: [11, 12, 13, 14, 15, 16, 17, 18, 19],
        20: [21, 22, 23, 24, 25, 26, 27],
        30: [31, 32, 33, 34, 35, 36, 37, 38, 39],
        40: [41, 42, 43, 44, 45, 46, 47, 48, 49],
        50: [51, 52, 53, 54, 55, 56, 57, 58, 59],
        60: [61, 62, 63, 64, 65, 66, 67],
        70: [71, 72, 73, 74, 75, 76, 77, 78, 79],
        80: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
      })
    ).toEqual([80, 10, 30, 40, 50]);

    expect(
      Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80], {
        1: [],
        10: [11, 12, 13, 14, 15, 16, 17, 18, 19],
        20: [],
        30: [31, 32, 33, 34, 35, 36, 37, 38, 39],
        40: [41, 42, 43, 44, 45, 46, 47, 48, 49],
        50: [51, 52, 53, 54, 55, 56, 57, 58, 59],
        60: [],
        70: [],
        80: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
      })
    ).toEqual([80, 10, 30, 40, 50]);
  });

  test("Should creare a card with three five (unique) number rows", () => {
    getRandomSpy.mockReturnValue(0);

    const output = Lib.getCard(structuredClone(Lib.SOURCES));

    expect(output.rows).toEqual([
      [1, 10, 20, 30, 40],
      [2, 11, 21, 31, 41],
      [3, 12, 22, 32, 42],
    ]);
  });
});

describe("Cards - Test Tombolone - getCards", () => {
  test("Should return 6 cards by default", () => {
    expect(Lib.getCards().length).toBe(6);
  });

  test("Should return the required number of cards", () => {
    expect(Lib.getCards(2).length).toBe(2);
  });

  test("Should return the required number of cards, even if greater than 6", () => {
    expect(Lib.getCards(8).length).toBe(8);
  });
});

describe("Cards - Tombolone v1 - Test cards generation", () => {
  let cards = Lib.getTomboloneCardsV1();

  test("Script generates 3 coupled-cards of 30 numbers", () => {
    expect(cards).toHaveLength(3);
    cards.forEach((card) => {
      expect(card).toHaveLength(30);
    });
    expect.assertions(4);
  });

  test("Each card has ordered numbers", () => {
    cards.forEach((card) => {
      card.forEach((number, index) => {
        expect(+number).toBeGreaterThan(index ? +card[index - 1] : 0);
      });
    });
    expect.assertions(90);
  });
});

describe("Cards - Tombolone v2 - Test cards generation", () => {
  const cards = Lib.getTomboloneCardsV2();

  test("Should be 6 cards", () => {
    expect(cards.length).toBe(6);
  });

  test("Should include ordered numbers", () => {
    expect(cards[0]).toEqual(
      expect.arrayContaining([
        [1, 2, 3, 4, 5],
        [11, 12, 13, 14, 15],
        [21, 22, 23, 24, 25],
      ])
    );

    expect(cards[1]).toEqual(
      expect.arrayContaining([
        [6, 7, 8, 9, 10],
        [16, 17, 18, 19, 20],
        [26, 27, 28, 29, 30],
      ])
    );

    expect(cards[2]).toEqual(
      expect.arrayContaining([
        [31, 32, 33, 34, 35],
        [41, 42, 43, 44, 45],
        [51, 52, 53, 54, 55],
      ])
    );

    expect(cards[5]).toEqual(
      expect.arrayContaining([
        [66, 67, 68, 69, 70],
        [76, 77, 78, 79, 80],
        [86, 87, 88, 89, 90],
      ])
    );
  });

  test("Should create 3 coupled-cards of 30 numbers as fallback to Tombolone v1", () => {
    const output = Lib.convertOutputGetTomboloneCardsV2ToV1(cards);
    expect(output[0]).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ]);
  });
});
