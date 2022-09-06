const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const output = require("./src/output.js");
//teamMembers begins as empty array, profiles to be pushed into array
const teamMembers = [];

//function to create manager, included in init() function
const createManager = () => {
  console.log("Please build your team.");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the team manager's office number?",
      },
    ])
    .then((managerValues) => {
      const { name, id, email, officeNum } = managerValues;
      const manager = new Manager(name, id, email, officeNum);
      //values pushed into teamMembers array
      teamMembers.push(manager);
      createEmployee();
    });
};

//createEmployee is used to discern between engineers and interns being added
const createEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "Which type of team member would you like to add? (Use arrow keys)",
        choices: [
          "Engineer",
          "Intern",
          "I do not want to add any more team members",
        ],
      },
    ])
    .then((response) => {
      if (response.role === "Engineer") {
        createEngineer();
      } else if (response.role === "Intern") {
        createIntern();
      } else {
        //if no more team members selected, createHTML with dynamically rendered content
        createHTML(teamMembers);
      }
    });
};

const createEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
      },
    ])
    .then((engineerValues) => {
      const { name, id, email, github } = engineerValues;
      const engineer = new Engineer(name, id, email, github);
      teamMembers.push(engineer);
      createEmployee();
    });
};

const createIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((internValues) => {
      const { name, id, email, school } = internValues;
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      createEmployee();
    });
};

function createHTML(teamMembers) {
  //   const getMarkdown = createHTML();
  // console.log(teamMembers);
  fs.writeFile("./dist/outputindex.html", output(teamMembers), (error) =>
    error ? console.error(error) : console.log("Successfully created HTML!")
  );
}

// TODO: Create a function to initialize app
//initialized function will allow user to capture manager data right when node.js called
function init() {
  createManager();
}

// Function call to initialize app
init();
