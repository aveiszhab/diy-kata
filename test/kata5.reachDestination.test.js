const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5 hours.');
    expect(reachDestination(100, 50)).toEqual('I should be there in 2 hours.');
    expect(reachDestination(32, 10)).toEqual('I should be there in 3.5 hours.');
  });
});
