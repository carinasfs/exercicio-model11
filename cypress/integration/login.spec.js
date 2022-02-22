///<reference types="cypress"/>

describe('Fazer login no site', () => {

    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type("teste_aluno15@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, teste_aluno15')
        
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type("teste_aluno16@teste.com")
        cy.get('#password').type("teste@teste.com")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type("teste_aluno15@teste.com")
        cy.get('#password').type("teste@teste")
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail teste_aluno15@teste.com está incorreta. Perdeu a senha?')
                
    });
    
});