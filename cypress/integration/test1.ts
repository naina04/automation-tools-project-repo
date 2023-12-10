// your-test-spec.js

// your-test-spec.ts

// Import the custom command
import './commands';

// Your Cypress test
describe('Your Test Suite', () => {
  beforeEach(() => {
    // Reset the database before each test
    cy.resetDB();
  });

  it('should do something with the reset database', () => {
    // Your test logic here
  });

  // Additional tests...
});


cy.login('your_username', 'your_password');
cy.selectOptionFromDropdown('#myDropdown', 'Option 1');
cy.visit('/some-page'); // This will now log additional information as well

