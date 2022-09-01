const Intern = require("../lib/intern");

describe("Intern Subclass", () => {
  it("should create an Object with name, id, email, and school name key pair values", () => {
    const intern = new Intern("Dylan", 10, "dylangriess@gmail.com", "Iowa");
    expect(intern).toEqual({
      name: "Dylan",
      id: 10,
      email: "dylangriess@gmail.com",
      school: "Iowa",
    });
  });
  it("should return a string value for name equal to name param", () => {
    const intern = new Intern("Dylan", 10, "dylangriess@gmail.com", "Iowa");
    const name = "Dylan";
    expect(intern.getName()).toEqual(name);
  });
  it("should return a string value for id equal to id param", () => {
    const intern = new Intern("Dylan", 10, "dylangriess@gmail.com", "Iowa");
    const id = 10;
    expect(intern.getId()).toEqual(id);
  });
  it("should return a string value for email equal to email param", () => {
    const intern = new Intern("Dylan", 10, "dylangriess@gmail.com", "Iowa");
    const email = "dylangriess@gmail.com";
    expect(intern.getEmail()).toEqual(email);
  });
  it("should return a string value for school name equal to school param", () => {
    const intern = new Intern("Dylan", 10, "dylangriess@gmail.com", "Iowa");
    const school = "Iowa";
    expect(intern.getSchool()).toEqual(school);
  });
});
