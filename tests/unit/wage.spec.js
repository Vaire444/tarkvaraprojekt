const wage = require("./WageCalculator");

describe("wage", () => {
  it("should add two numbers", () => {
    expect(wage(1000)).toBe();
  });

  it("should return sole input", () => {
    expect(wage(5)).toBe(5);
  });
  it("should add three numbers", () => {
    expect(wage(1, 2, 3)).toBe(6);
  });
  it("should return 0 if no numbers are passed", () => {
    expect(wage()).toBe(0);
  });
  it("should add any number of arguments", () => {
    expect(wage(1, 2, 3, 4, 5, 6)).toBe(21);
  });
});
