describe('logout', () => {
    it('successfully logs out user with logout button', () => {
      
      cy.visit('http://127.0.0.1:5500/index.html');

      cy.get('.logout').click();

      cy.wait(10000)
  
      cy.url().should('include', '/login');

      cy.wait(10000)
    });
});