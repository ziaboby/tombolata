import { UNIT_KEYS } from "./constants";
import NumbersGroup from "./NumbersGroupClass";

class SingleGroups extends NumbersGroup {
  constructor(
    aInput: number[],
    numberOfTotCards: number,
    unit: string | number
  ) {
    const MAX_NUMBERS_OF_GROUPS_BY_UNIT = {
      [UNIT_KEYS._1]: 3,
      [UNIT_KEYS._10]: 2,
      [UNIT_KEYS._20]: 2,
      [UNIT_KEYS._30]: 2,
      [UNIT_KEYS._40]: 2,
      [UNIT_KEYS._50]: 2,
      [UNIT_KEYS._60]: 2,
      [UNIT_KEYS._70]: 2,
      [UNIT_KEYS._80]: 1,
    };
    super(aInput, numberOfTotCards, [1, MAX_NUMBERS_OF_GROUPS_BY_UNIT[unit]]);
  }
}

class DoubleGroups extends NumbersGroup {
  constructor(
    aInput: number[],
    numberOfTotCards: number,
    unit: string | number
  ) {
    const MAX_NUMBERS_OF_GROUPS_BY_UNIT = {
      [UNIT_KEYS._1]: 3,
      [UNIT_KEYS._10]: 4,
      [UNIT_KEYS._20]: 4,
      [UNIT_KEYS._30]: 4,
      [UNIT_KEYS._40]: 4,
      [UNIT_KEYS._50]: 4,
      [UNIT_KEYS._60]: 4,
      [UNIT_KEYS._70]: 4,
      [UNIT_KEYS._80]: 5,
    };
    super(aInput, numberOfTotCards, [2, MAX_NUMBERS_OF_GROUPS_BY_UNIT[unit]]);
  }
}
