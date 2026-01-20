const { formatPareto } = require("../utils/format_data")

test("ensure pareto format is correct for chart js manipulation", () => {
    const input = 
    [{kw: "ai", count: 50, cumulative: 50},
            {kw: "trump", count: 30, cumulative: 80},
            {kw: "manufacturing", count: 20, cumulative: 100}];

    result = formatPareto(input)
    expect(result).toEqual({
        "labels": ["ai","trump","manufacturing"],
        "datasets": [
            {
                "type":"bar",
                "label":"Frequency",
                "data": [50,30,20],
                "yAxisID":"y"
            },
            {
                "type":"line",
                "label":"Cumulative %",
                "data": [50,80,100],
                "yAxisID":"y1"
            }
        ]
    })    })