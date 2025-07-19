Cypress.Commands.add('fazerLogin', (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario)
  cy.get('[data-test="password"]').type(senha)
  cy.get('[data-test="login-button"]').click()
})
