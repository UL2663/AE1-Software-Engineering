const { radar_funct } = require("../utils/analyse")

test("token counts are assigned to radar categories", () => { 

    const tokens = {
        manufacturing: 12,
        pharma: 5,
        trump: 10,
        policy:26,
    };

    const result = radar_funct(tokens)

    expect(result).toEqual({
        industry: 12,
        health: 5,
        politics: 36
    });
});