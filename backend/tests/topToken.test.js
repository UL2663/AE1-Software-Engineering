const {topToken} = require("../utils/analyse")

test("make sure the top token value only is returned", () => {
    const tokens = {
        manufacturing: 12,
        pharma: 5,
        trump: 10,
        policy:26,
    };

    const result = topToken(tokens)
    expect(result).toEqual({"policy":26})

})