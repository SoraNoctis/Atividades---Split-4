import Base from "./_base.page.js"
import {INVENTORY as Inv, EXTRAS as EX} from "../pages/components/sauce.elements.js"

export default class SauceInventory extends Base {
    static itemInfo(num) {
        super.getElementByXPath(Inv.LIST_ITEM, num)
    }

    static addBackpack() {
        super.clickOnElement(Inv.BACKPACK)
    }
    static addBackLigth() {
        super.clickOnElement(Inv.BIKE_LIGTH)
    }
    static addBoltShirt() {
        super.clickOnElement(Inv.BOLT_TS)
    }
    static addFleece() {
        super.clickOnElement(Inv.FLEECE_JK)
    }
    static addOnesie() {
        super.clickOnElement(Inv.BBB_OS)
    }
    static addTestALLShirt() {
        super.clickOnElement(Inv.TEST_TS)
    }
}
