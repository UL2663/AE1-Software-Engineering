const { standardiseTitle } = require("../utils/standardise")

test("makes all title text lowercase", () => { 
    const title = "HEADING";
    const result = standardiseTitle(title);
    expect(result).toEqual("heading");
    })

test("removes all title text punctuation", () => { 
    const title = "!?He..,aDING!";
    const result = standardiseTitle(title);
    expect(result).toEqual("heading");
    })

test("standardises spaces", () => {
    const title = "I am    an  article!";
    const result = standardiseTitle(title);
    expect(result).toEqual("i am an article")
})