/// <reference types="cypress" />
import SauceLogin from "../pages/sauce_login.page.js"
import SauceInventory from "../pages/sauce_inventory.page.js"

describe("Testes de Inventario Swag Labs DEMO", () => {
    
    describe("Standar_USER - Tests", () => {
        beforeEach(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar("standard_user")
            cy.url().should("contain", "inventory.html")
        })
    
        it("Has Inventory on Display", () => {
            cy.get("[class=inventory_container]")
        })

        describe("Add to Inventory", () => {
            it("BackLigth", () => {
                SauceInventory.addBackLigth()
            })
    
            it("Backpack", () => {
                SauceInventory.addBackpack()
            })
            
            it("Bolt T-Shirt", () => {
                SauceInventory.addBoltShirt()
            })
    
            it("Fleece", () => {
                SauceInventory.addFleece()
            })
    
            it("Onsie", () => {
                SauceInventory.addOnesie()
            })

            it("TestAll T-Shit", () => {
                SauceInventory.addTestALLShirt()
            })

            it("'ALL'", () => {
                SauceInventory.addBackpack()
                SauceInventory.addBackLigth()
                SauceInventory.addBoltShirt()
                SauceInventory.addFleece()
                SauceInventory.addOnesie()
                SauceInventory.addTestALLShirt()
            })
        })
    })

    describe("Locked_Out_User - Tests", () => {
        beforeEach(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar("locked_out_user")
        })

        it("Has Been Kikedout", () => {
            cy.url().should("contain", "/")
        })

    })

    describe("Problem_User - Tests", () => {
        beforeEach(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar("standard_user")
            cy.url().should("contain", "inventory.html")
        })
    
        it("Has Inventory on Display", () => {
            cy.get("[class=inventory_container]")
        })
        describe("Add to Inventory", () => {
            it("BackLigth", () => {
                SauceInventory.addBackLigth()
            })
    
            it("Backpack", () => {
                SauceInventory.addBackpack()
            })
            
            it("Bolt T-Shirt", () => {
                SauceInventory.addBoltShirt()
            })
    
            it("Fleece", () => {
                SauceInventory.addFleece()
            })
    
            it("Onsie", () => {
                SauceInventory.addOnesie()
            })

            it("TestAll T-Shit", () => {
                SauceInventory.addTestALLShirt()
            })

            it("'ALL'", () => {
                SauceInventory.addBackpack()
                SauceInventory.addBackLigth()
                SauceInventory.addBoltShirt()
                SauceInventory.addFleece()
                SauceInventory.addOnesie()
                SauceInventory.addTestALLShirt()
            })
        })

    })

    describe.skip("Performance_Glitch_User - Tests\n (Desativado por ser lento por padrão)", () => {
        beforeEach(() => {
            SauceLogin.acessarSauceDemo()
            SauceLogin.logar("standard_user")
            cy.url().should("contain", "inventory.html")
        })
    
        it("Has Inventory on Display", () => {
            cy.get("[class=inventory_container]")
        })

        describe("Add to Inventory", () => {
            it("BackLigth", () => {
                SauceInventory.addBackLigth()
            })
    
            it("Backpack", () => {
                SauceInventory.addBackpack()
            })
            
            it("Bolt T-Shirt", () => {
                SauceInventory.addBoltShirt()
            })
    
            it("Fleece", () => {
                SauceInventory.addFleece()
            })
    
            it("Onsie", () => {
                SauceInventory.addOnesie()
            })

            it("TestAll T-Shit", () => {
                SauceInventory.addTestALLShirt()
            })

            it("'ALL'", () => {
                SauceInventory.addBackpack()
                SauceInventory.addBackLigth()
                SauceInventory.addBoltShirt()
                SauceInventory.addFleece()
                SauceInventory.addOnesie()
                SauceInventory.addTestALLShirt()
            })
        })
    })
})
