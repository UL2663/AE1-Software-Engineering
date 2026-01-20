const { countTokens } = require("../utils/analyse")

test("ensures counts from countToken are accurate", () => {
    const data = [ { tokens: ["ai","trump","manufacturing"]},
    { tokens: ["manufacture","trump","manufacturing"]},
    { tokens: ["ai","manufacturing"]},
    { tokens: ["ai","trump","manufacturing"]}
];
const result=countTokens(data);
expect(result).toEqual({
    ai: 3,
    trump: 3,
    manufacturing: 4,
    manufacture: 1
});
})