describe('test_cart1', () => {

  const username = 'standard_user';
  const password = 'secret_sauce';

    it('passes', () => {

      cy.visit('https://www.saucedemo.com')
      cy.get('input[data-test="username"]').type(username);
      cy.get('input[data-test="password"]').type(password);
      cy.get('input[type="submit"]').click();
      cy.url().should('include', '/inventory.html');
      cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('button[data-test="remove-sauce-labs-backpack"]').should('be.visible');
      cy.get('#shopping_cart_container').should('be.visible');
      cy.get('#shopping_cart_container').click();
      cy.url().should('include', '/cart.html');
      cy.get('button[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
    })
  })