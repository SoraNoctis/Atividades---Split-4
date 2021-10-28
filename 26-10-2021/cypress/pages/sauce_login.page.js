import Base from "./_base.page.js"
import {LOGIN as LoIn, EXTRAS as EX} from "../pages/components/sauce.elements.js"

export default class SauceLogin extends Base {
    static acessarSauceDemo() {
        cy.visit(`/`)
    }

    static logar(usuario = "locked_out_user", password = "secret_sauce") {
        super.typeValue(LoIn.INP_USER, usuario)
        super.typeValue(LoIn.INP_PASSWORD, password)
        super.clickOnElement(LoIn.BTN_LOGIN)
    }

    static validarLoginIncorreto() {
        super.validateElementText(EX.TXT_ERROR, "Usuário inválido")
    }
}
