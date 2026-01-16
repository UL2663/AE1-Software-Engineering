const { standardiseTitle } = require("../utils/standardise")

test("makes all title text lowercase", () => { 
    const article = {
        title: "HEADING"};
    
    const result = standardiseTitle(article);

    expect(result).toEqual({
        title: "heading"
    });

    })

test("removes all title text punctuation", () => { 
    const article = {
        title: "!?He..,aDING!"};
    
    const result = standardiseTitle(article);

    expect(result).toEqual({
        title: "heading"
    });

    })