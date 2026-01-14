const { standardiseGN } = require("../utils/standardise")

test("standardises article data correctly", () => { 
    const article = {
        title: "News",
        publishedAt: "2026-01-12T10:00:00Z"};
    
    const result = standardiseGN(article);

    expect(result).toEqual({
        title: "News",
        publishedAt: "2026-01-12T10:00:00Z"
    });

    })