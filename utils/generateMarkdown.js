// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "") {
    // return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    switch(license) {
      case "MIT":
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "GPL 3.0":
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "Apache 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "MPL 2.0":
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license != "") {
//     let linkLicense = license.toLowerCase();
//     return `[${license}](https://choosealicense.com/licenses/${linkLicense}/)`
//   } else {
//     return '';
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license != '') {
//     return `## License`;
//   }
//   return '';
// }

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Credits 
  ${data.username}
  ## License 
  ${renderLicenseBadge(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.email}
`;
}

module.exports = generateMarkdown;
