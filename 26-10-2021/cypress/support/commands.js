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

Cypress.Commands.add("prodututoNoCarrinho", () => {

})

Cypress.Commands.add("acessarCarrinho", () => {

})

Cypress.Commands.add("concluirComprasIVALIDO", () => {

})

Cypress.Commands.add("concluirCompras", () => {
    
})
Cypress.Commands.add("isNotInViewport", { prevSubject: true }, (element) => {
    const message = `Did not expect to find ${element[0].outerHTML} in viewport`;
  
    cy.get(element).should(($el) => {
      const bottom = Cypress.$(cy.state("window")).height();
      const rect = $el[0].getBoundingClientRect();
  
      expect(rect.top).to.be.greaterThan(bottom, message);
      expect(rect.bottom).to.be.greaterThan(bottom, message);
      expect(rect.top).to.be.greaterThan(bottom, message);
      expect(rect.bottom).to.be.greaterThan(bottom, message);
    });
  });
  
  Cypress.Commands.add("isInViewport", { prevSubject: true }, (element) => {
    const message = `Expected to find ${element[0].outerHTML} in viewport`;
  
    cy.get(element).should(($el) => {
      const bottom = Cypress.$(cy.state("window")).height();
      const rect = $el[0].getBoundingClientRect();
  
      expect(rect.top).not.to.be.greaterThan(bottom, message);
      expect(rect.bottom).not.to.be.greaterThan(bottom, message);
      expect(rect.top).not.to.be.greaterThan(bottom, message);
      expect(rect.bottom).not.to.be.greaterThan(bottom, message);
    });
  });