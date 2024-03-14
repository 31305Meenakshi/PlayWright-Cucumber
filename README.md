# PlayWright-Cucumber🤖

 ![playWright](https://i.imgur.com/CDGmBAp.jpeg)



 
 ![cucumber](https://i.imgur.com/wcNlkdC.jpeg)

## Overview👇

This project implements an UI testing using Playwright with cucumber framwork, which is a Behavior Driven Development tool used to develop test cases for the behavior of software's functionality. The name of Website is **[Swag Labs](https://www.saucedemo.com/)**

## Required npm Packages

- cucumber
- playwright
- ts-node
- types/node
- html-cucumber reporter

## Folder Structure

```bash
├── src
│   ├── helper📂
│         ├── report.ts
│   ├── hooks📂
│         ├── hooks.ts
│         ├── pageFixture.ts
│   ├── test📂
│         ├── features📂
│                ├── login.feature
│                ├── product.feature
│                ├── checkOutStepOne.feature
│                ├── checkOutStepTwo.feature
│         ├── steps📂
│               ├── login.ts
│               ├── product.ts
│               ├── checkOutStepOne.ts
│               ├── checkOutStepTwo.ts
├── test-results📂
│         ├── screenshots📂
│         ├── cucumber-report.html
│         ├── cucumber-report.json

```

## Files Description

- **report.ts** it containig the `multiple-cucumber-html-reporter` package to generate an HTML report for Cucumber test results.
- **hooks.ts** it sets up the necessary hooks for Playwright and Cucumber integration, launches a browser, creates a new page for each scenario, takes screenshots after each step and test, and attaches the screenshots to the test report.
- **pageFixture.ts** provide a shared fixture or utility for storing the Playwright page object that can be accessed and modified across different modules or files in your test suite.
- **login.feature, product.feature, checkOutStepOne.feature, checkOutStepTwo.feature** these feature files describes the `login feature, product feature, checkout feature` with multiple scenarios, each with different input data. The Examples tables provide the specific values to be substituted in the corresponding steps.

- **login.ts, product.ts, checkOutStepOne.ts, checkOutStepTwo.ts** provided code is a set of step definitions written in the Cucumber syntax with Playwright and Playwright Test. These step definitions are used to define the behavior and actions for the `login feature, product feature, checkout feature` scenarios described in the feature file.

## Reports

- Cucumber html Report
- Cucumber json Report

## Conclusion

This project demonstrates how to implement an UI Automation in Playwright with Cucumber features and stepDefinitions. By executing all these step definitions with Cucumber,different scenarios can be automated and validated against the expected behavior.
