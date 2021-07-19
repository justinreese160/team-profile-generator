var inquirer = require("inquirer");
var fs = require("fs");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var Manager = require("./lib/Manager");
var teamMembers = []

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is employee's name?",
  },
  {
    type: "input",
    name: "Id",
    message: "What is employee's Id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is employee's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is interns school?",
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is employee's name?",
  },
  {
    type: "input",
    name: "Id",
    message: "What is employee's Id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is employee's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is employee's name?",
  },
  {
    type: "input",
    name: "Id",
    message: "What is employee's Id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is employee's email?",
  },
  {
    type: "input",
    name: "gitHub",
    message: "What is engineer's git hub?",
  },
];

const continueQuestions = [
  {
    type: "choice",
    name: "type",
    message: "choose employee role",
    choices: ["enginner", "manager", "intern"],
  },
  {
    type: "confirm",
    name: "continue",
    message: "Do you want to continue entering employees?",
  },
];

function init() {
  inquirer.prompt(continueQuestions).then(function (answers) {
    if (answers.continue === true) {
      switch (answers.type) {
        case "engineer":
          createEngineer();
          break;
        case "manager":
          createManager();
          break;
        case "intern":
          createIntern();
          break;

        default:
          break;
      }
    }else{
        //use team members array to build html//
    }
  });
}

function createEngineer(){
    inquirer.prompt(engineerQuestions).then(function(answers){
        var newEngineer = new Engineer(answers.name, answers.Id, answers.email, answers.gitHub)
        teamMembers.push(newEngineer)
        init()
    })
}
function createManager(){
    inquirer.prompt(managerQuestions).then(function(answers){
        var newManager = new Manager(answers.name, answers.Id, answers.email, answers.officeNumber)
        teamMembers.push(newManager)
        init()
    })
}
function createIntern(){
    inquirer.prompt(internQuestions).then(function(answers){
        var newintern = new Intern(answers.name, answers.Id, answers.email, answers.school)
        teamMembers.push(newIntern)
        init()
    })
}