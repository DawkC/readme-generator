// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter the title!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description about the project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a short description!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the link to your project! (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to enter a project link!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You need to enter your GitHub Username!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter your email address!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide details on installation (if any).',
      },
      {
        type: 'input',
        name: 'projectUse',
        message: 'Provide examples for your projects uses.',
      },
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Would you like to give credit to other collaborators?',
        default: true
      },
      {
        type: 'input',
        name: 'projectCredits',
        message: 'Please list your collaborators and their GitHub profiles.',
        when: ({ confirmCredits }) => {
          if (confirmCredits) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Which license do you want to use? (Check one)',
        choices: ['MIT', 'GNU General Public License v3.0', 'Apache']
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add instructions on how to contribute?',
        default: true
      },
      {
        type: 'input',
        name: 'projectContributors',
        message: 'Please explain how other developers can contribute to your project.',
        when: ({ confirmContributing }) => {
          if (confirmContributing) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to add any tests?',
        default: true
      },
      {
        type: 'input',
        name: 'projectTests',
        message: 'Please explain any tests you have created for your app and how to run them.',
        when: ({ confirmTests }) => {
          if (confirmTests) {
            return true;
          } else {
            return false;
          }
        }
      }
];

inquirer.prompt(questions).then((answers) => {
    // questions.projects.push(answers);
    fs.writeFile('README.md', generateMarkdown(answers), err => {
        if (err) throw err;

        console.log('README complete! Check out README.md to see the output!')
    });
    console.log(answers);
});
// }

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
