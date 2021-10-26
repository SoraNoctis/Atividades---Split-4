/// <reference types="cypress" />

describe("Testes barra de navegação", () => {

    beforeEach(() => {
        cy.visit("/");
    })

    it("Deve acessar área 'channel' clicando no botao respectivo", () => {
        cy.get(`[title=channel]`).click();
        cy.url().should("contain", "/channel")
    })
    
    it("Deve acessar área 'Sobre mim' clicando no botao respectivo", () => {
        cy.get(`[title='Sobre-mim']`).click();
        cy.url().should("contain", "/sobre-mim")
        cy.get().should().trigger("mouseover")
    })

    it("Deve acessar área 'Contato' clicando no botao respectivo", () => {
        cy.get(`[title='Contato']`).click();
        cy.url().should("contain", "/contato")
    })

    it("Deve acessar área 'Serviços' clicando no botao respectivo", () => {
        cy.get(`[title='Serviços']`).click();
        cy.url().should("contain", "/servicos")
    })
})
