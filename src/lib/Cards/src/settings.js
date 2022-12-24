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

export {
  MAX_CARDS_WITHOUT_DOUBLES,
  EMPTY_SPACES,
  COLUMN_KEYS,
  SOURCES,
  NUMBERS,
};
