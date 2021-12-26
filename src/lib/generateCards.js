const MAX_CARDS_WITHOUT_DOUBLES = 6,
    MAX_EMPTY_SPACES_09 = 9,
    MAX_EMPTY_SPACES = 8,
    MAX_EMPTY_SPACES_90 = 7,
    EMPTY_SPACES = new Array(91).fill(''),
    NUMBERS = Object.keys(EMPTY_SPACES),
    SOURCES = {
        '1': [...NUMBERS.slice(1, 10), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES_09)],
        '10': [...NUMBERS.slice(10, 20), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '20': [...NUMBERS.slice(20, 30), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '30': [...NUMBERS.slice(30, 40), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '40': [...NUMBERS.slice(40, 50), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '50': [...NUMBERS.slice(50, 60), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '60': [...NUMBERS.slice(60, 70), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '70': [...NUMBERS.slice(70, 80), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES)],
        '80': [...NUMBERS.slice(80, 91), ...EMPTY_SPACES.slice(0, MAX_EMPTY_SPACES_90)]
    };

export const getTomboloneCards = () => {
    const res = []
    const allNumbers = NUMBERS.slice(1);
    for (let i = 0; i < 3; i++) {
        const initialIndex = i * 30
        res[i] = allNumbers.slice(initialIndex, initialIndex + 30)
    }
    return res
}

export const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function () {
    // CREATE COLS OF SINGLES AND DOUBLES
    const SINGLE = {
        '1': 3,
        '10': 2,
        '20': 2,
        '30': 2,
        '40': 2,
        '50': 2,
        '60': 2,
        '70': 2,
        '80': 1
    };
    const groups = Object.keys(SINGLE).reduce((previous, current) => {
        // TODO delete empty spaces
        // let list = SOURCES[current].slice(0);
        let list = SOURCES[current].filter(item => item !== '');
        for (let i = 0; i < MAX_CARDS_WITHOUT_DOUBLES; i++) {
            if (!previous[current]) {
                previous[current] = { singles: [], doubles: [] };
            }
            if (i < SINGLE[current]) {
                const extracted = list[getRandom(0, list.length - 1)];
                list = list.filter(item => item != extracted);
                previous[current].singles.push([extracted]);
            } else {
                // TODO fix case of same extracted number
                const extracted1 = list[getRandom(0, list.length - 1)];
                let extracted2 = list[getRandom(0, list.length - 1)];
                while (extracted2 === extracted1) {
                    extracted2 = list[getRandom(0, list.length - 1)];
                }
                list = list.filter(item => item != extracted1 && item != extracted2);
                previous[current].doubles.push([extracted1, extracted2]);
            }
        }
        return previous;
    }, {});

    // GROUP COLS BY CARD
    const getRandomItemAndDeletedIt = (key, type) => {
        const curr = groups[key][type];
        const extracted = getRandom(0, curr.length - 1);
        const col = curr[extracted];
        groups[key][type] = groups[key][type].filter((x, i) => i !== extracted);
        return col;
    };
    const cards = {};
    for (let i = 1; i <= MAX_CARDS_WITHOUT_DOUBLES; i++) {
        const singlesList = Object.keys(groups).filter(key => (groups[key].singles || []).length);
        const singlesWithMajorLength = Object.keys(groups).filter(
            key => (groups[key].singles || []).length >= 2
        );
        const doublesList = Object.keys(groups).filter(key => (groups[key].doubles || []).length);
        let single1 = singlesWithMajorLength.length
            ? singlesWithMajorLength[getRandom(0, singlesWithMajorLength.length - 1)]
            : singlesList[getRandom(0, singlesList.length - 1)];
        let single2 = singlesList[getRandom(0, singlesList.length - 1)];
        while (single2 === single1) {
            single2 = singlesList[getRandom(0, singlesList.length - 1)];
        }
        let single3 = singlesList[getRandom(0, singlesList.length - 1)];
        while (single3 === single1 || single3 === single2) {
            single3 = singlesList[getRandom(0, singlesList.length - 1)];
        }
        cards[i] = {
            [single1]: getRandomItemAndDeletedIt(single1, 'singles'),
            [single2]: getRandomItemAndDeletedIt(single2, 'singles'),
            [single3]: getRandomItemAndDeletedIt(single3, 'singles'),
            ...doublesList.reduce((prev, key) => {
                if (![single1, single2, single3].includes(key)) {
                    return {
                        ...prev,
                        [key]: getRandomItemAndDeletedIt(key, 'doubles')
                    };
                }
                return prev;
            }, {})
        };
    }

    // FINAL CARDS
    const finalCards = {};
    for (let i = 1; i <= MAX_CARDS_WITHOUT_DOUBLES; i++) {
        if (!finalCards[i]) {
            finalCards[i] = [];
        }
        for (let row = 1; row <= 3; row++) {
            const currentCardCols = cards[i];
            const doublesKeys = Object.keys(currentCardCols).filter(
                key => (currentCardCols[key] || []).length === 2
            );
            const singlesKeys = Object.keys(currentCardCols).filter(
                key => (currentCardCols[key] || []).length === 1
            );
            if (row === 1) {
                finalCards[i].push([
                    cards[i][doublesKeys[0]].pop(),
                    cards[i][doublesKeys[1]].pop(),
                    cards[i][doublesKeys[2]].pop(),
                    cards[i][doublesKeys[3]].pop(),
                    cards[i][doublesKeys[4]].pop()
                ]);
            } else {
                const random1 = doublesKeys.length
                    ? doublesKeys[0]
                    : singlesKeys[getRandom(0, singlesKeys.length - 1)];
                let random2 = random1,
                    random3 = random1,
                    random4 = random1,
                    random5 = random1;
                while (random2 === random1) {
                    random2 = singlesKeys[getRandom(0, singlesKeys.length - 1)];
                }
                while ([random1, random2].includes(random3)) {
                    random3 = singlesKeys[getRandom(0, singlesKeys.length - 1)];
                }
                while ([random1, random2, random3].includes(random4)) {
                    random4 = singlesKeys[getRandom(0, singlesKeys.length - 1)];
                }
                while ([random1, random2, random3, random4].includes(random5)) {
                    random5 = singlesKeys[getRandom(0, singlesKeys.length - 1)];
                }
                finalCards[i].push([
                    cards[i][random1].pop(),
                    cards[i][random2].pop(),
                    cards[i][random3].pop(),
                    cards[i][random4].pop(),
                    cards[i][random5].pop()
                ]);
            }
        }
    }

    // return { groups, cards, finalCards };
    return Object.keys(finalCards).map(index => finalCards[index])
}
