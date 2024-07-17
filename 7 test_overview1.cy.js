describe('test_overview1', () => {

  const username = 'standard_user';
  const password = 'secret_sauce';
  const firstName = "jane";
  const lastName = "doe";
  const zip = "75000";

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
      cy.get('input[data-test="firstName"]').type(firstName);
      cy.get('input[data-test="lastName"]').type(lastName);
      cy.get('input[data-test="postalCode"]').type(zip);
      cy.get('input[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
      cy.get('button[data-test="finish"]').click();
      cy.url().should('include', '/checkout-complete.html');
      cy.get('img[data-test="pony-express"]').should('be.visible');
      cy.get('button[data-test="back-to-products"]').click();
      cy.url().should('include', '/inventory.html');
    })
  })