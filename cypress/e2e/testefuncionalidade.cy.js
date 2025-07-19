describe('Funcionalidade pós login - adicionando item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com')
        cy.fazerLogin('standard_user', 'secret_sauce')
    })

  it('adicionando item ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.get('.cart_item').should('contain', 'Sauce Labs Backpack')
  })
  
})
