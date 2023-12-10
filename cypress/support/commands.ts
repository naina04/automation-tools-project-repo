// commands.js

  declare global {
    namespace Cypress {
      interface Chainable {
        resetDb(): void
        execSQL(query: string): Cypress.Chainable<Exec>
        withinModal(modalSelector: string, inModal: (elem: JQuery<HTMLElement>) => void): void
        login(user: UserWithCredentials): void
      }
    }
  }

Cypress.Commands.add('resetDB', () => {
  // Make an API request to reset or seed your database
  // Replace the following with the actual API endpoint and payload for your application
  cy.request({
    method: 'POST',
    url: 'https://your-api-endpoint/reset-db',
    body: {
      // Your payload or parameters for resetting the database
    },
  });
});

// commands.ts

Cypress.Commands.add('executeSQLQuery', (query: string) => {
  // Make an API request to your backend with the SQL query
  cy.request({
    method: 'POST',
    url: 'https://your-api-endpoint/execute-sql-query',
    body: {
      query,
    },
  });
});

// commands.ts

Cypress.Commands.add('performActionWithinModal', () => {
  // Trigger the modal to open (replace with your own logic)
  cy.get('#openModalButton').click();

  // Use within to scope commands to the modal
  cy.get('#myModal').within(() => {
    // Perform actions within the modal
    cy.get('#modalInput').type('Hello, Modal!');
    cy.get('#modalSubmitButton').click();
  });

  // Confirm that the modal is closed (replace with your own logic)
  cy.get('#myModal').should('not.be.visible');
});

// other custom commands...


// Custom command to log in
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login'); // Assuming your login page is at /login
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

// Custom command to select an option from a dropdown
Cypress.Commands.add('selectOptionFromDropdown', (dropdownSelector, optionText) => {
  cy.get(dropdownSelector).click();
  cy.contains(optionText).click();
});

// Override the built-in 'visit' command to log additional information
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  console.log('Visiting:', url);
  return originalFn(url, options);
});

