// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-yellow.svg)`;
}

//function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "GPL 3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}
${renderLicenseBadge(data.licenses)} 

# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribute](#contribute)
* [Tests](#tests)
* [Contact Info](#questions)
* [License](#license)

# Installation
To install ${data.title}, follow the instructions below:

${data.installation}

# Usage
To use ${data.title}, follow the steps below:

${data.usage}

# Contribute
to contribute to ${data.title}, follow the instructions below:
${data.contributing}

# Tests
Below are sample tests created for ${data.title}:

${data.tests}

# Questions
Please contact me at my github [${data.github}](https://github.com/${
    data.github
  }) or send me an email @ ${data.email} with any questions.

# License
This project uses the following license [${data.licenses}](${renderLicenseLink(data.licenses)})
`;
}

module.exports = generateMarkdown;
