describe('login', () => {
  
    it('cannot submit the login form with invalid credentials', () => {
      cy.visit('http://127.0.0.1:5500/src/html/login.html');
  
      cy.get('.login #email').type('invaliduser.#noroff.no')
      cy.get('.login #password').type('inv{enter}');

      cy.url().should('include', '/login.html')
    })
  })