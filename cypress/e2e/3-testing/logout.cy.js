describe('logout', () => {
    it('successfully logs out user with logout button', () => {
      
      cy.visit('/src/html/login.html');
      cy.wait(2000);

      cy.intercept('GET', 'https://api.noroff.dev/api/v1/social/posts*', {
        statusCode: 200,  
        body: []  
});

      cy.get('.login #email').clear().type('testuser123456@stud.noroff.no');
      cy.get('.login #password').clear().type('testuser123456{enter}');

      cy.url().should('include', '/profile');

      cy.wait(4000);
      
      cy.visit("/");

      cy.wait(5000)
      cy.get('.logout').click();

      cy.wait(10000)
  
      cy.url().should('include', '/login');

      cy.wait(10000)
    });
});