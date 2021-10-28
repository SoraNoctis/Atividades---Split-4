/// <reference types="cypress" />
import SauceLogin from "../pages/sauce_login.page.js"

describe("Testes de Login Swag Labs DEMO", () => {
    
    beforeEach(() => {
        SauceLogin.acessarSauceDemo()
    })

    it("Deve tentar acessar a loja com standard_user.", () => {
        SauceLogin.logar("standard_user")
        cy.url().should("contain", "inventory.html")
    })

    it("Deve falhar ao acessar a loja com locked_out_user.", () => {
        SauceLogin.logar("locked_out_user")
        cy.get("[data-test=error]")
    })

    it("Deve tentar acessar a loja com problem_user.", () => {
        SauceLogin.logar("problem_user")
        cy.url().should("contain", "inventory.html")
    })

    it.skip("Deve tentar acessar a loja com performance_glitch_user.\n (Desativado por ser lento por padrão)", () => {
        SauceLogin.logar("performance_glitch_user")
        cy.url().should("contain", "inventory.html")
    })

})
