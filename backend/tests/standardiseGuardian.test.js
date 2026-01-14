const { standardiseGuardian } = require("../utils/standardise")

test("standardises guardian article data correctly", () => { 
    const article = {
        webTitle: "AI News",
        webPublicationDate: "2026-01-12T10:00:00Z"
    };

    expect(standardiseGuardian(article)).toEqual({
        title: "AI News",
        publishedAt: "2026-01-12T10:00:00Z"
    });
});