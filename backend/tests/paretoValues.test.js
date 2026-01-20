const { paretoValues } = require("../utils/analyse")

test("pareto values are accurately built", () => { 
    const counts = { 
    ai: 50, //same categories from other test
    trump: 30,
    manufacturing: 20};

    const result = paretoValues(counts)

    expect(result).toEqual([
        {kw: "ai", count: 50, cumulative: 50},
        {kw: "trump", count: 30, cumulative: 80},
        {kw: "manufacturing", count: 20, cumulative: 100},
    ]);
})