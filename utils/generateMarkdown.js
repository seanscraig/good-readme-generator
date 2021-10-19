// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != '') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != '') {
    return `![link](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != '') {
    return `## License`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Credits](#credits)
  - [License](#license)
  ## Installation 
  ${data.installation}`;
  // ## Usage 
  // ${data.usage}
  // ${renderLicenseSection(data.license)}
  // ## Credits 
  // ${data.credits}
  // ## License 
  // ## Contributing
  // ${data.contributing}
  // ## Tests
  // ${data.tests}
// `;
}

module.exports = generateMarkdown;
