const { paretoValues } = require("../utils/analyse")

test("pareto values are accurately built", () => { 
    const counts = { 
    "2026-01-12": 50, //same categories from other test
    "2026-01-13": 30,
    "2026-01-14": 20};

    const result = paretoValues(counts)

    expect(result).toEqual([
        {date: "2026-01-12", count: 50, cumulative: 50},
        {date: "2026-01-13", count: 30, cumulative: 80},
        {date: "2026-01-14", count: 20, cumulative: 100},
    ]);
})