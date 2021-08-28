//Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

//array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      // # Your Project Title
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title");
          return false;
        }
      },
    },
    // ## Description
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a project description");
          return false;
        }
      },
    },
    // ## Installation
    {
      type: "input",
      name: "installation",
      message:
        "Please enter a instructions on how to install your project (Required)",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide steps to install your project");
          return false;
        }
      },
    },
    // ## Usage
    {
      type: "input",
      name: "usage",
      message:
        "Please enter instructions on how to use your project (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide instructions on how to use your project");
          return false;
        }
      },
    },
    // ## License
    {
      type: "list",
      name: "licenses",
      message: "What license would you like to apply to your project",
      choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3", "None"],
    },
    // ## Contributing
    {
      type: "input",
      name: "contributing",
      message:
        "Please enter instructions on how to contribute to your open source project",
    },
    // ## Tests
    {
      type: "input",
      name: "tests",
      message: "Please enter instructions on how to test your project",
    },
    // ## Contact Info for questions
    {
      type: "input",
      name: "github",
      message: "Please enter your github ID",
    },

    {
      type: "input",
      name: "email",
      message: "Please enter your email",
    },
  ]);
};

//function to initialize app
function init() {
  questions().then((answers) => {
    const readmeString = generateMarkdown(answers);
    fs.writeFileSync("./dist/README.md", readmeString);
  });
}

// Function call to initialize app
init();
