// imports

describe("myFirst Jest Test", () => {
    test("passing test for sum", () => {
        // call functions or components to load and test
        let first = 2
        let second = 3
        expect(first).toBe(2)
        first = first + second
        expect(first).toBe(5)
    })

    test("failing test for sum", () => {
        // call functions or components to load and test
        let first = 2
        let second = 3
        expect(first).toBe(2)
        first = first + second
        expect(first).toBe(5)
    })
})