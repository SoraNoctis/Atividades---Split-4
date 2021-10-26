/// <reference types="cypress" />

describe("Testes de Login Swag Labs", () => {
    
    beforeEach(() => {
        cy.visit("/");
    })

    it("Deve tentar acessar a loja com standard_user.", () => {
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("contain", "inventory.html")

    })

    it("Deve falhar ao acessar a loja com locked_out_user.", () => {
        cy.get("#user-name").type("locked_out_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("contain", "")
    })

    it("Deve tentar acessar a loja com problem_user.", () => {
        cy.get("#user-name").type("problem_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("contain", "inventory.html")

    })

    it("Deve tentar acessar a loja com performance_glitch_user.", () => {
        cy.get("#user-name").type("performance_glitch_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("contain", "inventory.html")
    })

})
