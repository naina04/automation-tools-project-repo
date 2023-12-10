// your-test-spec.js

cy.login('your_username', 'your_password');
cy.selectOptionFromDropdown('#myDropdown', 'Option 1');
cy.visit('/some-page'); // This will now log additional information as well

