describe('User can log in and access profile', () => {
    it('successfully logs in user and accesses profile', () => {
     
      cy.visit('/src/html/login.html');
  
      cy.get('.login #email').clear().type('testuser123456@stud.noroff.no');
      cy.get('.login #password').clear().type('testuser123456{enter}');
  
      cy.wait(10000);
  
      cy.url().should('include', '/profile');
    });
  });