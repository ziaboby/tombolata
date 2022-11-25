import { getRandom } from "../utils";
import Lib from "../Cards";

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
});
