Description: hm08-qa-us is a project that perfoms automated testing on the functionality of Urban Routes.Nine automated tests were created to cover the full process of ordering a taxi. See a breif description of each test below: 

1. Setting the address
2. Selecting Supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message for the driver
6. Ordering a Blanket and handkerchiefs 
7. Ordering 2 Ice creams
8. The car search modal appears
9. Waiting for the driver info to appear in the modal 

Technologies and Techniques: these tests were ran using the following technologies and methods:

VS CODE
    - Node.js + node pacakage manager
        - To install Node.js, download the appropriate version for your operating system from the official Node.js website: https://nodejs.org/en -It is recommended to use Node.js v18.
        Once installed, access the npm command-line tool, which you can use to manage packages and dependencies for the project.
        type "npm init --yes" on terminal to initialize npm.
        type "npm install jest" on terminal to install jest.
        When you are ready to start testing using npm, run the following code inside the VS Code terminal: npm init --yes
    - Webdriver.io
    - Github

Running Tests:
    - use asynchronous code and built-in functions and methods accepted on webdriver.io 
    - run "npm run wdio" in VS code terminal