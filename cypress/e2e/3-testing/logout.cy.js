describe('logout', () => {
    it('successfully logs out user with logout button', () => {
      
      cy.visit('/src/html/login.html');
      cy.wait(2000);

      cy.get('.login #email').clear().type('testuser123456@stud.noroff.no');
      cy.get('.login #password').clear().type('testuser123456{enter}');

      cy.wait(4000);
      
      cy.visit("/index.html");
      cy.get('.logout').click();

      cy.wait(10000)
  
      cy.url().should('include', '/login');

      cy.wait(10000)
    });
});