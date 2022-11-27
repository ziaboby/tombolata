import { getRandom } from "../utils";
import { test as Lib } from "../Cards";

jest.mock("../utils", () => ({
  getRandom: jest.fn(),
}));

describe("Test Tombolone cards generation ", () => {
  beforeEach(() => {
    getRandom.mockReset();
  });

  test("Should extract a random number and remove it from source - extractNumberAndUpdateSource", () => {
    // return index at index 2
    getRandom.mockReturnValueOnce(2);

    const output = Lib.extractNumberAndUpdateSource(
      { 1: [1, 2, 3, 4, 5], 2: [2, 4, 6, 8, 10] },
      1
    );

    expect(getRandom).toHaveBeenCalled();
    expect(output.extractedNumber).toBe(3);
    expect(output.updatedSource[1]).toEqual(expect.not.arrayContaining([3]));
  });

  test("Should create a five number row, taking a single item per column, without counter object", () => {
    getRandom.mockReturnValue(0);
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
    expect(output.updatedColCounter).toEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    });
  });

  test("Should create a five number row, taking a single item per column, with counter object", () => {
    getRandom.mockReturnValue(0);
    const output = Lib.getRow(
      [1, 2, 3, 4, 5, 6, 7],
      {
        1: [11, 12, 13],
        2: [21, 22, 23],
        3: [31, 32, 33],
        4: [41, 42, 43],
        5: [51, 52, 53],
        6: [61, 62, 63],
        7: [71, 72, 73],
      },
      {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
      }
    );

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
    expect(output.updatedColCounter).toEqual({
      1: 2,
      2: 2,
      3: 2,
      4: 2,
      5: 2,
    });
  });

  test("Should return the list of cols where retrieving numbers", () => {
    getRandom.mockReturnValue(0);
    expect(Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80])).toEqual([
      1, 10, 20, 30, 40, 50, 60, 70, 80,
    ]);
    expect(
      Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80], {
        1: 1,
        10: 1,
        20: 1,
        30: 1,
        40: 1,
      })
    ).toEqual([10, 20, 30, 40, 50, 60, 70, 80]);
    expect(
      Lib.getSuitableCols([1, 10, 20, 30, 40, 50, 60, 70, 80], {
        1: 1,
        10: 2,
        20: 2,
        30: 2,
        40: 2,
        50: 1,
      })
    ).toEqual([1, 50, 60, 70, 80]);
  });

  test("Should creare a card with three five (unique) number rows", () => {
    getRandom.mockReturnValue(0);

    const output = Lib.getCard({
      1: [1, 2, 3],
      10: [11, 12, 13],
      20: [21, 22, 23],
      30: [31, 32, 33],
      40: [41, 42, 43],
      50: [51, 52, 53],
      60: [61, 62, 63],
      70: [71, 72, 73],
      80: [81, 82, 83],
    });

    expect(output.rows).toEqual([
      [1, 11, 21, 31, 41],
      [12, 22, 32, 42, 51],
      [2, 52, 61, 71, 81],
    ]);
  });

});
