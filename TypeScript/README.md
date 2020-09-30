# Gilded Rose

### Pre-requisites

 * node and npm

(I have not tested for minimal version, but was developed using node version v13.4.0 and npm v6.13.4.)

## Installation

 * `npm i`. This will install the dependencies.

## Running

 * To run the original test script: `npm run app`. This will recompile from source, then execute the test script in node.
 * To run the tests (with coverage): `npm test`. (This will also run the linter.)

## CI (deployment)

 * The npm task: `npm test` will run the linter, code coverage and unit tests. If any of these fails with lint warning, low code coverage or unit test failures the process with exit with a 1 as an exit code. This will break the build, and is therefore all we should need as a gatekeeper task in the build.

## Development

We recommend that while developing we run the tests in 'watch' mode continuously using `npm run watch`.

This project is using prettier and eslint to enforce code formatting and static analysis. Prettier rules are enforced via an eslint plugin. Therefore we recommend that whatever IDE you are using it has an eslint plugin to auto report and fix your code as you work.

This project uses lint-staged (via husky) to enforce commits are passing static analysis (eslint), code formatting rules (prettier), code coverage and tests (jest). This is generally good practice and should run fast enough (only running on changed files.) However if it needs to be, it can be overridden with the git flag: `--no-verify`.

## Environment decisions

We decided to use jest (over mocha) because of improvements in a few areas:

 * mocha's watch is broken so would require something like nodemon to add watch functionality
 * the 'all in one' approach of jest (including assertion library, coverage, mocking, runner etc. all in) means a less complex setup on our side, and we can trust (or hope) that the jest dev team works on library compatibility issues so we don't have to
 * smart parallelisation of tests for improved performance
 * great developer experience in the runner for choosing what tests to run without polluting the codebase with `.only`

It is understood however that jest comes with some downsides, such as a more complex (and sometimes strange) method for mocking as well as a much larger dependency tree. It should be trivial to move back to mocha if required.

