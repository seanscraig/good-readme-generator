// A function that returns a license badge based on which license is passed in
// The badge is also a link to the license
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
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
    default:
      return "";
      break;
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[License MIT](https://opensource.org/licenses/MIT)`;
      break;
    case "GPL 3.0":
      return `[License GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "Apache 2.0":
      return `[License Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MPL 2.0":
      return `[License MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
      break;
    default:
      return "";
      break;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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
  ${data.credits}

  ## License 
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project please send me an email at ${data.email} or reach out to me on Github my username is ${data.username}
`;
}

module.exports = generateMarkdown;
