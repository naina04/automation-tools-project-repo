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

const resetDb = () => {
  
}

const execSQL = (query: string): Cypress.Chainable<Cypress.Exec> => {
  
}

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

