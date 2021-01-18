import generateCards, { getTomboloneCards } from "../generateCards"

describe('Test Tombolone cards generation', () => {

    let cards = getTomboloneCards()

    test('Script generates 3 coupled-cards of 30 numbers', () => {
        expect(cards).toHaveLength(3)
        cards.forEach(card => {
            expect(card).toHaveLength(30)
        })
        expect.assertions(4)
    })

    test('Each card has ordered numbers', () => {
        cards.forEach(card => {
            card.forEach((number, index) => {
                if (index) {
                    expect(+number).toBeGreaterThan(+card[index - 1])
                }
            })
        })
        expect.assertions(87) // 29 * 3
    })

})

describe('Test cards generation', () => {

    const cards = generateCards()

    test('It generates 6 cards', () => {
        expect(cards).toHaveLength(6)
    })

    test('Each cards has 3 five-number row', () => {
        cards.forEach(card => {
            expect(card).toHaveLength(3)
            card.forEach(row => {
                expect(row).toHaveLength(5)
            })
        })
    })

    test('Cards have 90 numbers without duplication ', () => {
        const result = []
        cards.forEach(card => {
            card.forEach(row => {
                row.forEach(number => {
                    if (!result.includes(number)) {
                        result.push(number)
                    }
                })
            })
        })
        expect(result).toHaveLength(90)
    })

    test('Each column for each card has maximun 2 numbers', () => {
        const refLimit = [10, 20, 30, 40, 50, 60, 70, 80, 90]
        cards.forEach(card => {
            const numbers = []
            card.forEach(row => {
                numbers.push(...row)
            })
            refLimit.forEach(((limit, index) => {
                expect(numbers.filter(num => +num < limit && (!index || +num > refLimit[index - 1])).length).toBeLessThanOrEqual(2)
            }))
        })
    })

})