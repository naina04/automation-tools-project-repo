// cypress/plugins/index.js

// Example: Register a custom task
module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
  });
};

