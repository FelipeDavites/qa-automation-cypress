describe('Login', () => {

  it('Login com sucesso', () => {

    cy.visit('https://automationpratice.com.br/login')

    cy.get('#user')
      .type('teste@teste.com')

    cy.get('#password')
      .type('123456')

    cy.get('#btnLogin')
      .click()

  })

})
