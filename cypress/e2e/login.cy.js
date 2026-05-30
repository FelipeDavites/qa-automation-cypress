/// <reference types="cypress" />

// Funcionalidade
describe('login', () => {


   //Cenario 1
   
   it('login com sucesso', () => {
    // abre o app
    cy.visit('https://automationpratice.com.br/login')
    // preenche o e-mail
    cy.get('#user').type('test@teste.com')
    // preenche a senha
    cy.get('#password').type('123456')
    // clica em logar
    cy.get('#btnLogin').click()
    // valida o login
    cy.get('#swal2-title').should('have.text', 'Login realizado')
   })
   
   //Cenario 2
   it('login com senha inválida', () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('test@teste.com')
    cy.get('#password').type('123')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
    .should('have.text', 'Senha inválida.')
    .should('be.visible')
   })

   //Cenario 3
   it('login com e-mail inválido', () => {
   cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('tes1234ttestecom')
    cy.get('#password').type('12345123')
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
    .should('have.text', 'E-mail inválido.')
    .should('be.visible')
   })

  })
