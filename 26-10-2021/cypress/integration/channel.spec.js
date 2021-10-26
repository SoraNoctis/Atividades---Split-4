/// <reference types="cypress" />

describe("Testes para pág. Sobre mim", () => {
    it("Deve acessar área 'Sobre mim' clicando no botao respectivo", () => {
        cy.visit("/");
        cy.get(`[title='Sobre-mim']`).click();
        cy.url().should("contain", "/sobre-mim")
        cy.contains("cinza").scrollIntoView()
        cy.get(".div.medium-articule-feed-layout-1").scrollIntoView().should("be.visible")
    })
})
