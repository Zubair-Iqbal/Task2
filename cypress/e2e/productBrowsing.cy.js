describe('Product Listing and Browsing Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
  })
  it('should ensure that every product has a visible name', () => {
    cy.get('.inventory_item_name').should('be.visible')
  })
  it('should confirm that each product has a description text', () => {
    cy.get('.inventory_item_desc').should('be.visible')
  })
  it('should verify that a price is listed for each product', () => {
    cy.get('.inventory_item_price').should('be.visible')
  })
  it('should check that there is an "Add to Cart" button for every product', () => {
    cy.get('.btn_inventory').should('be.visible')
  })
  it('should validate that each product has an associated image displayed', () => {
    cy.get('.inventory_item_img').should('be.visible')
  })
})

