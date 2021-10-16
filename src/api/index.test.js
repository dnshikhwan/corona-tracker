const index = require("./index")
// @ponicode
describe("index.fetchData", () => {
    test("0", async () => {
        await index.fetchData("FR")
    })

    test("1", async () => {
        await index.fetchData("US")
    })

    test("2", async () => {
        await index.fetchData("France")
    })

    test("3", async () => {
        await index.fetchData("China")
    })

    test("4", async () => {
        await index.fetchData("GB")
    })

    test("5", async () => {
        await index.fetchData(undefined)
    })
})

// @ponicode
describe("index.fetchDailyData", () => {
    test("0", async () => {
        await index.fetchDailyData()
    })
})

// @ponicode
describe("index.fetchcountries", () => {
    test("0", async () => {
        await index.fetchcountries()
    })
})
