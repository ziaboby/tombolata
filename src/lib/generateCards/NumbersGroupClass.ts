import { getRandom } from "./utils";

class NumbersGroup {
  _aNumbers: number[];
  _numberOfCards: number;
  _maxGroupLength: number;
  _maxNumberOfGroups: number;
  _resultingGroups: Array<number[]>;
  _error: string;

  constructor(
    aInput: number[],
    numberOfTotCards: number,
    [maxGroupLength, maxNumberOfGroups]: [number, number]
  ) {
    this._aNumbers = aInput.slice(0);
    this._numberOfCards = numberOfTotCards;
    if (!maxGroupLength || !maxNumberOfGroups) {
      this._resultingGroups = [];
      this._error =
        "The third parameter must be an array of two items as follow: [maxGroupLength, maxNumberOfGroups]";
    } else {
      this._maxGroupLength = maxGroupLength;
      this._maxNumberOfGroups = maxNumberOfGroups;
      this.createGroups();
    }
  }

  _extractRandomNumber() {
    const lastIndex = this._aNumbers.length - 1;
    return this._aNumbers[getRandom(0, lastIndex)];
  }

  _removeItemFromNumbers(numberToRemove: number) {
    this._aNumbers = this._aNumbers.filter((item) => item !== numberToRemove);
  }

  _addGroupToTheResultingGroups(group: number[]) {
    this._resultingGroups.push(group);
  }

  _createGroup() {
    const group = [] as number[];
    for (let i = 0; i < this._maxGroupLength; i++) {
      let extractedNumber = this._extractRandomNumber();
      while (i && extractedNumber === group[i - 1]) {
        extractedNumber = this._extractRandomNumber();
      }
      group.push(extractedNumber);
      this._removeItemFromNumbers(extractedNumber);
    }
    return group;
  }

  createGroups() {
    for (let i = 0; i < this._numberOfCards; i++) {
      if (i < this._maxNumberOfGroups) {
        break;
      }
      this._addGroupToTheResultingGroups(this._createGroup());
    }
  }

  get remainingNumbers() {
    return this._aNumbers.slice(0);
  }

  get resultingGroups() {
    return this._resultingGroups.slice(0);
  }

  get error() {
    return this._error;
  }
}

export default NumbersGroup;
