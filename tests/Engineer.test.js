const Engineer = require("../lib/engineer");

describe("Engineer Subclass", () => {
  it("should create an Object with name, id, email, and github profile key pair values", () => {
    const engineer = new Engineer(
      "Dylan",
      10,
      "dylangriess@gmail.com",
      "https://github.com/dylangriess"
    );
    expect(engineer).toEqual({
      name: "Dylan",
      id: 10,
      email: "dylangriess@gmail.com",
      github: "https://github.com/dylangriess",
    });
  });
  it("should return a string value for name equal to name param", () => {
    const engineer = new Engineer(
      "Dylan",
      10,
      "dylangriess@gmail.com",
      "https://github.com/dylangriess"
    );
    const name = "Dylan";
    expect(engineer.getName()).toEqual(name);
  });
  it("should return a string value for id equal to id param", () => {
    const engineer = new Engineer(
      "Dylan",
      10,
      "dylangriess@gmail.com",
      "https://github.com/dylangriess"
    );
    const id = 10;
    expect(engineer.getId()).toEqual(id);
  });
  it("should return a string value for email equal to email param", () => {
    const engineer = new Engineer(
      "Dylan",
      10,
      "dylangriess@gmail.com",
      "https://github.com/dylangriess"
    );
    const email = "dylangriess@gmail.com";
    expect(engineer.getEmail()).toEqual(email);
  });
  it("should return a string value for github profile equal to github param", () => {
    const engineer = new Engineer(
      "Dylan",
      10,
      "dylangriess@gmail.com",
      "https://github.com/dylangriess"
    );
    const github = "https://github.com/dylangriess";
    expect(engineer.getGithub()).toEqual(github);
  });
});
