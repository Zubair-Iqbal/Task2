describe('Login testcases', () => {
  it('Verify the login functionality', () => {
    cy.visit('https://saucedemo.com/v1/')
    //Incorrect credentials
    cy.get('#user-name').type('stand_user'); 
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').type('{enter}');
    cy.get('[data-test="error"]').should('exist');
    cy.wait(500);
    cy.reload();
    //Correct credentials
    cy.get('#user-name').clear().type('standard_user')
    cy.get('#password').clear().type('secret_sauce')
    cy.get('#login-button').type('{enter}')
    cy.get('.product_label').should('exist')
    cy.wait(500)
    //Logout
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login-button').should('exist')
  })
})