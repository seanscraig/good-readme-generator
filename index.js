// Packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// An array of questions for user input
const questions = [
  {
    message: "What is your github username?",
    name: "username",
  },
  {
    message: "What is your email address?",
    name: "email",
  },
  {
    message: "What is the name of your project?",
    name: "title",
  },
  {
    message: "Please briefly describe your project",
    name: "description",
  },
  {
    message: "What are the instructions for installing your project?",
    name: "installation",
  },
  {
    message: "What is the usage information for your project?",
    name: "usage",
  },
  {
    message: "Who do you want to credit for working on your project?",
    name: "credits",
  },
  {
    message: "What are the contribution guidelines for your project?",
    name: "contributing",
  },
  {
    message: "What are the test instructions for your project?",
    name: "tests",
  },
  {
    type: "list",
    message: "What license do you want to use for your project?",
    choices: ["MIT", "GPL 3.0", "Apache 2.0", "MPL 2.0", ""],
    name: "license",
  },
];

// A function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("success");
  });
}

// A function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);
    writeToFile("./output/README-example.md", answers);
  });
}

// Function call to initialize app
init();
