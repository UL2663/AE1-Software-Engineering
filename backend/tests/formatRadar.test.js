const {formatRadar} = require("../utils/format_data")

test("Checking chart.js format for radar data is correct", () => {
    input = {
        education: 0,
        morals_ethics:0,
        industry: 12,
        health: 5,
        politics: 36
    }

    result = formatRadar(input)
    expect(result).toEqual(
        {"labels": ["education","morals_ethics","industry","health", "politics"],
        "datasets":[{
            "label":"Distribution of Themes",
            "data":[0,0,12,5,36]
        }]})
}) 