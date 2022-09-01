const Manager = require("../lib/manager");

describe("Manager Subclass", () => {
  it("should create an Object with name, id, email, and officeNum key pair values", () => {
    const manager = new Manager("Dylan", 10, "dylangriess@gmail.com", 210);
    expect(manager).toEqual({
      name: "Dylan",
      id: 10,
      email: "dylangriess@gmail.com",
      officeNum: 210,
    });
  });
  it("should return a string value for name equal to name param", () => {
    const manager = new Manager("Dylan", 10, "dylangriess@gmail.com", 210);
    const name = "Dylan";
    expect(manager.getName()).toEqual(name);
  });
  it("should return a string value for id equal to id param", () => {
    const manager = new Manager("Dylan", 10, "dylangriess@gmail.com", 210);
    const id = 10;
    expect(manager.getId()).toEqual(id);
  });
  it("should return a string value for email equal to email param", () => {
    const manager = new Manager("Dylan", 10, "dylangriess@gmail.com", 210);
    const email = "dylangriess@gmail.com";
    expect(manager.getEmail()).toEqual(email);
  });
  it("should return a string value for office number equal to officeNum param", () => {
    const manager = new Manager("Dylan", 10, "dylangriess@gmail.com", 210);
    const officeNum = 210;
    expect(manager.getOfficeNum()).toEqual(officeNum);
  });
});
