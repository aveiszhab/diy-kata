const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid")).toEqual(
      "Human Recommended Reading Assistant"
    );
    expect(getEmployerRole("Jenny")).toEqual("Sales Associate");
    expect(getEmployerRole("Satti")).toEqual("Developer");
  });
});
