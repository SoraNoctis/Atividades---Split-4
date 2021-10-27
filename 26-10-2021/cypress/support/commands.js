///<reference types="cypress" />
import Base from "../pages/_base.page.js"
import {LOGIN as LoIn, EXTRAS as EX} from "../pages/components/sauce.elements.js"
//import Faker from "faker";

Cypress.Commands.add("logar", (usuario = "locked_out_user") => {
    cy.get(LoIn.INP_USER).type(usuario)
    cy.get(LoIn.INP_PASSWORD).type(passord)
    cy.get(LoIn.BTN_LOGIN).click()
    cy.url().should("include", "/inventory.html")
})

Cypress.Commands.add("prodtutoNoCarrinho", () => {

})

Cypress.Commands.add("acessarCarrinho", () => {

})

Cypress.Commands.add("concluirComprasIVALIDO", () => {

})

Cypress.Commands.add("concluirCompras", () => {
    
})
