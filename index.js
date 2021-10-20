// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
    choices: ["MIT","Apache","GNU","ISC License"],
    name: "license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown.generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers);
    // writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
