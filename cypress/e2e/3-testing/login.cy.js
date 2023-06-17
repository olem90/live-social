describe('User can log in and access profile', () => {
    it('successfully logs in user and accesses profile', () => {
     
      cy.visit('/src/html/login.html');
  
      cy.get('.login #email').clear().type('testuser123456@stud.noroff.no');
      cy.get('.login #password').clear().type('testuser123456{enter}');
  
      // Check if the login was successful by verifying an item in localStorage or some other indicator
      cy.window().its('localStorage').invoke('getItem', 'accessToken').should('exist');
  
      // Wait for the redirection after login. This wait duration might need to be adjusted depending on the application.
      cy.wait(10000);
  
      // Check if the redirection to the profile page was successful
      cy.url().should('include', '/profile');
      
      // You can also check for some user-specific information on the profile page, if there is any
      // cy.get('.profile-data').should('contain', 'testuser123456@stud.noroff.no');
    });
  });