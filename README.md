# DevoChallenge
Devo - QA Automation Challenge

UI Automation Tasks
Exercise 1: Login Feature Validation
    1.Test Case Identification:

        Test Case 1: Valid Login
        Description: Verify that a user can log in successfully using valid credentials.
        Reasoning: Validating the core functionality of login is essential as it is a critical entry point to the platform.

        Test Case 2: Invalid Login - Wrong Password
        Description: Ensure that attempting to log in with an invalid password results in an error message.
        Reasoning: This helps ensure that security measures are in place, and users are informed of login failures due to incorrect credentials.

        Test Case 3: Remember Me Option
        Description: Validate the functionality of the "Remember Me" checkbox to ensure the session persists across browser restarts.
        Reasoning: Important for user experience, ensuring the session is managed correctly.

    2.Test Automation:

        I will automate Test Case 1 (Valid Login) and Test Case 2 (Invalid Login - Wrong Password) because they cover both successful and unsuccessful login flows, which are critical for login validation.

Exercise 2: Clone Role Feature Validation
    Test Automation:
        Validate the process of cloning a role.

Exercise 3: GET Role Endpoint Validation
    Test Case Identification:

        Test Case 1: Validate Role Retrieval for Administrator Description: Ensure that the GET endpoint returns the "Administrator" role and validates that its type is "ADMIN".
        Reasoning: This is the primary test to verify that the API correctly returns a specific role, validating both the retrieval process and the type.

        Test Case 2: Invalid Role Handling Description: Verify that the API responds appropriately (e.g., 404 Not Found) when requesting a role that does not exist.
        Reasoning: Important to ensure that the API correctly handles erroneous input.