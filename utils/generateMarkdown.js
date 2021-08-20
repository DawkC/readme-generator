// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GNU General Public License v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under [${license}](${renderLicenseLink(
    license
  )}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [GitHub Information](#github-information)
  * [Installation & Usage](#installation-&-usage)
  * [Collaborators](#collaborators)
  * [License](#license)
  * [Languages](#languages)
  * [Contributions](#contributions)
  * [Tests](#tests)

  ## GitHub Information
  ${data.github}
  ${data.link}
  ${data.email}

  ## Installation & Usage
  ${data.installation}
  ${data.projectUse}

  ## Collaborators
  ${data.confirmCredits}
  ${data.projectCredits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Languages
  ${data.languages}
  
  ## Contributions
  ${data.confirmContributing}
  ${data.projectContributors}

  ## Tests
  ${data.confirmTests}
  ${data.projectTests}

`;
}

module.exports = generateMarkdown;
