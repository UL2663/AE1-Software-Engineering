const { join_data } = require("../utils/join_data")

test("joins data correctly", () => {
    const a = [{data: 'a', tokens: []}];
    const b = [{data:'b', tokens: []}];
    const c = [{data:'c', tokens: []}];
    const d = [{data:'d', tokens: []}];

    const result = join_data(a,b,c,d)
    expect(result).toEqual([
  { data: 'a', tokens: [] },
  { data: 'b', tokens: [] },
  { data: 'c', tokens: [] },
  { data: 'd', tokens: [] }
])})
