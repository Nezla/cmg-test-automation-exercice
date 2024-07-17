describe('test_login1', () => {

  const username = 'standard_user';
  const password = 'secret_sauce';

    it('passes', () => {

      cy.visit('https://www.saucedemo.com')
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
      cy.get('input[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('contain', 'Products');
    })
});