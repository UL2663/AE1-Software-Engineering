const { standardiseTitle } = require("../utils/standardise")

test("makes all title text lowercase", () => { 
    const title = "HEADING";
    const result = standardiseTitle(title);
    expect(result).toEqual("heading");
    })

test("removes all title text punctuation", () => { 
    const article = "!?He..,aDING!"
    const result = standardiseTitle(article);
    expect(result).toEqual("heading");
    })