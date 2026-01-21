const {mapDates} = require("../utils/analyse")

test("dates are mapped correctly", () =>{
    const input = [
        {title: "Article on some things", publishedAt: "2026-01-12" , tokens: ["token1","token2"]},
        {title: "Article on some things", publishedAt: "2026-01-12" , tokens: ["token1","token2"]},
        {title: "Article on some things", publishedAt: "2026-01-15" , tokens: ["token1","token2"]},
        {title: "Article on some things", publishedAt: "2026-01-25" , tokens: ["token1","token2"]}
    ]
    const result = mapDates(input)
    expect(result).toEqual({"2026-01-12":2,"2026-01-15":1,"2026-01-25":1} )
})