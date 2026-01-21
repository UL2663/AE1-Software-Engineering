const { formatPareto } = require("../utils/format_data")

test("ensure pareto format is correct for chart js manipulation", () => {
    const input = 
    [
        {date: "2026-01-12", count: 50, cumulative: 50},
        {date: "2026-01-13", count: 30, cumulative: 80},
        {date: "2026-01-14", count: 20, cumulative: 100},
    ];

    result = formatPareto(input)
    expect(result).toEqual({
        "labels": ["2026-01-12","2026-01-13","2026-01-14"],
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