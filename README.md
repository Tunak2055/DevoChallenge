# DevoChallenge
#### Devo - QA Automation Challenge
This project contains both UI and API automation tests to validate key functionalities on the Devo platform. The project uses Playwright for both UI and API automation.

##### Prerequisites
Before running test, make sure you have installed:
Node.js (v14 or higher)
npm

check versions:
node -v
npm -v

Outdated Node
# installs fnm (Fast Node Manager)
winget install Schniz.fnm

# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression

# download and install Node.js
fnm use --install-if-missing 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

##### Setup Instructions

1- Clone repositorie:
`git clone https://github.com/Tunak2055/DevoChallenge.git`


2- Install Dependencies
`npm install`
3- Install Playwright latest
`npm init playwright@latest`
4- Delete tests folder created by default
5 - go to devoChallenges folder
`cd devoChallenges`
6- Install dotenv to use environment variables
`npm install dotenv --save`

##### Running Test

1. ##### Run UI Test
To execute individual test
- Login Validation:
    npx playwright test LoginValidation.spec.js

- Clone Role Test:
    npx playwright test CloneRoleFeatureValidation.spec.js

2 - ##### Run API Automation Test
To run API test use the following command:
`npx playwright test GETRoleEndpointValidation.spec.js`

3- ##### Run all test
To run all test, UI and API, run the following command:
`npx playwright test`

##### Additional Commands

##### Playwright test Report:
After runnning the tests, it generates a HTML report. You can open it with:
`npx playwright show-report`

##### Headed mode:
UI test run in headless mode (without opening the browser). To observe the browser during test you need to run:
`npx playwright test --headed`

for e.g.: `npx playwright test LoginValidation.spec.js --headed` (this would show the Login Validation test in the browser)

##### Using specified browser:
Playwright runs on all 3 different browsers Chromium, Firefox and Webkit. To run a quicker test or just need to run on a specific browser, you need to run it specifiying which one using the following command:

`npx playwright test LoginValidation.spec.js --project=chromium` (for chrome)
`npx playwright test LoginValidation.spec.js --project=firefox` (for firefox)
`npx playwright test LoginValidation.spec.js --project=webkit` (for safari)

## UI Automation Exercises

### Test Case Identification:

#### Exercise 1: Login feature validation

##### Test Case 1: Valid Login
Description: Verify that a user can log in successfully using valid credentials.
Reasoning: Validating the core functionality of login is essential as it is a critical entry point to the platform.
Prerequisite: Having an activated User to log in.

Step 1: Log into Devo URL (https://app.int.devo.com)
Step 2: Complete Username and Password.
Step 3: Select the Login button.
Step 4: Validate Successful login.

##### Test Case 2: Invalid Login – Wrong Username and Password
Description: Ensure that attempting to log in with an invalid username and password results in an error message.
Reasoning: This helps ensure that security measures are in place, and users are informed of login failures due to incorrect credentials.

Step 1: Log into Devo URL (https://app.int.devo.com)
Step 2: Complete Invalid Username and Password.
Step 3: Validate Invalid Login Banner is visible.
Step 4: Validate Invalid Login Banner text is “Invalid email”.

##### Test Case 3: Recovery Password:
Description: Validate the functionality of the " I forgot my password" link to ensure user can access the app in case of being locked out for entering too many times a wrong password or if user
Reasoning: Important for user experience, to recover password for having access to the app.

Step 1: Log into Devo URL (https://app.int.devo.com)
Step 2: Select "I forgot my password" link.
Step 3: Validate it shows “Restore Password” header and email box.
Step 4: Fill Email box with a valid email address.
Step 5: Select the “Send” button.
Step 6: Validate user receives an automatic email with a recovery password link.
Step 7: Select “New Password” recovery password link.
Step 8: Validate it redirects user to user recovery URL.
Step 9: Input new password.
Step 10: Validate new password is accepted and text is “Your password has been successfully updated.”
Step 11: Select “Start new session” button.
Step 12: Validate it redirects user to login page.
Step 13: Validate user can login with new password.

#### Test Automation:
I will automate Test Case 1 (Valid Login) and Test Case 2 (Invalid Login - Wrong Username and Password) because they cover both successful and unsuccessful login flows, which are critical
#### Exercise 2: Clone Role Feature Validation
Test Automation: Validate the process of cloning a role. Test is CloneRoleFeatureValidation.spec
 
### API Automation Exercise

#### Exercise 3: GET Role Endpoint Validation
##### Test Case Identification:

##### Test Case 1: Validate Role Retrieval for Administrator 
Description: Ensure that the GET endpoint returns the "Administrator" role and validates that its type is "ADMIN".
Reasoning: This is the primary test to verify that the API correctly returns a specific role, validating both the retrieval process and the type.

Step 1: Open API testing preferred tool (e.g.: Postman)
Step 2: Complete GET Request Endpoint with https://api.int.devo.com/probio/domain/domaincd@qachallenge/roles/{{role}}
Step 3: Replace role with “ADMIN”.
Step 4: In the Authorization tab select Bearer Token as Auth Type and add token.
Step 5: Send Request.
Step 6: Validate sending “ADMIN” role, Status code is 200 and Validate it correctly returns a specific role and Body brings a JSON with information.

##### Test Case 2: Invalid Role Handling 
Description: Verify that the API responds appropriately when requesting a role that does not exist.
Reasoning: Important to ensure that the API correctly handles erroneous input.

Step 1: Open API testing preferred tool (e.g.: Postman)
Step 2: Complete GET Request Endpoint with `https://api.int.devo.com/probio/domain/domaincd@qachallenge/roles/{{role}}`
Step 3: Replace role with Invalid role.
Step 4: In the Authorization tab select Bearer Token as Auth Type and add token.
Step 5: Send Request.
Step 6: Validate sending invalid role, Status code is 400 Bad Request and Validate body shows `"message": "Role '{{invalidRole}}' not found"`
