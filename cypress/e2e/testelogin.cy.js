describe('Testes de Sanidade - Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('login com sucesso', () => {
    cy.fazerLogin('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('login com senha incorreta', () => {
    cy.fazerLogin('standard_user', 'senhaerrada')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('login com campos vazios', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

})
