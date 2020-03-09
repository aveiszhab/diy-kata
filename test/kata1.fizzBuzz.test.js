const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  xit("returns Buzz when passed a multiple of 5", () => {});

  xit("returns FizzBuzz when passed a multiple 3 and 5", () => {});

  xit("returns the number when it isn't a multiple of 3 or 5", () => {});
});
