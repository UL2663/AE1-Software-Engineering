const { tokenizeTitles, stripTokens } = require("../utils/analyse")

test("produces list of tokens", () => { 
    const title = "a good enough article on ai in manufacturing";
    const result = tokenizeTitles(title)
    expect(result).toEqual( ['a', 'good', 'enough', 'article', 'on', 'ai', 'in', 'manufacturing']);
    })

test("produces a tokenized list without extra words", () => { 
    const title = "a good enough article on ai in manufacturing";
    const result = stripTokens(tokenizeTitles(title));
    expect(result).toEqual( ['good', 'enough', 'article', 'manufacturing']);
    })