describe('test_navigation1', () => {
  it('passes', () => {

    // Action 1 : go to the website
    cy.visit('https://www.saucedemo.com')
    // Action 2 : check that the URL is OK
    //cy.url().should('include','saucedemo')
  })
})