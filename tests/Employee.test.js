const Employee = require("../lib/employee");

describe("Employee Class", () => {
  it("should create an Object with name, id, and email key pair values", () => {
    const employee = new Employee("Dylan", 10, "dylangriess@gmail.com");
    expect(employee).toEqual({
      name: "Dylan",
      id: 10,
      email: "dylangriess@gmail.com",
    });
  });
  it("should return a string value for name equal to name param", () => {
    const employee = new Employee("Dylan", 10, "dylangriess@gmail.com");
    const name = "Dylan";
    expect(employee.getName()).toEqual(name);
  });
  it("should return a string value for id equal to id param", () => {
    const employee = new Employee("Dylan", 10, "dylangriess@gmail.com");
    const id = 10;
    expect(employee.getId()).toEqual(id);
  });
  it("should return a string value for email equal to email param", () => {
    const employee = new Employee("Dylan", 10, "dylangriess@gmail.com");
    const email = "dylangriess@gmail.com";
    expect(employee.getEmail()).toEqual(email);
  });
});
