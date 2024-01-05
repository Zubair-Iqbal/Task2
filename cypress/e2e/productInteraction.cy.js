describe('Product Interaction Testcases', () => {
  it('Verify the product interaction testcases', () => {
    cy.visit('https://saucedemo.com/v1/')
    //Login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').type('{enter}');
    // Product additon to cart
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should('exist');
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.item_pricebar > .btn_secondary').should('exist');
    cy.wait(500);
    //Product deletion from cart
    cy.get('.item_pricebar > .btn_secondary').click();
    cy.get('.item_pricebar > .btn_secondary').should('not.exist');
    cy.wait(500);
  })
})