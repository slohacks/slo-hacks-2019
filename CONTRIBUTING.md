# Contributing

__Welcome!__ This document will give you an overview of the technology behind this project and show you how you can contribute.

## Tech Stack
These are the tools that we're using in this project.
* [Gatsby](https://www.gatsbyjs.org/docs/)
* [React](https://reactjs.org/docs/hello-world.html)
* [ESLint](https://eslint.org/docs/user-guide/getting-started)
* [airbnb/javascript](https://github.com/airbnb/javascript)
* [Jest](https://facebook.github.io/jest/docs/en/getting-started.html)

## Getting Started (Workflow)
1. Fork the repository and clone it to your machine
2. Install the global dependencies: `gatsby-cli`, `eslint`, `stylelint`, and `commitizen`
    - e.g. `yarn global add gatsby-cli eslint stylelint commitizen`
3. Use the following commands as needed:
   - To run the dev server: `yarn run develop`
   - To build for production: `yarn run build`
     + this step is handled automatically for our repo
   - To lint your code: `yarn run lint`
   - To test your code: `yarn run test`
4. Create a pull request with your changes
5. Address any issues brought up by maintainers
   - Your changes will be automatically deployed to `gh-pages` upon a successful merge with `master`

## Standards
To contribute to this project, you must conform to the following standards.

### Code
* Javascript/JSX style guide
  * [airbnb/javascript](https://github.com/airbnb/javascript)
* CSS style guide
	* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
  * extras (view `.stylelintrc`)

### Commits && Pull Requests
* [conventional-changelog](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
* _Required:_ use [commitizen](https://github.com/commitizen/cz-cli) through `git cz` when commiting
	* Our repository is preconfigured to be commitizen-friendly
  * Commits that do not conform the the `conventional-changelog` standard will not be accepted
