export const LOGIN = {
    INP_USER        : "[data-test=username]",
    INP_PASSWORD    : "[data-test=password]",
    BTN_LOGIN       : "[data-test=login-button]"
}

export const INVENTORY = {
    //path //div[@id="inventory_container"]//div[@class="inventory_container"]/div/div[1]/div[@class="inventory_item_description"]/div[@class ="pricebar"]/button
    LIST_ITEM       : `//div[@id="inventory_container"]//div[@class="inventory_container"]/div/div`,
    BACKPACK        : "[data-test=add-to-cart-sauce-labs-backpack]",
    BIKE_LIGTH      : "[data-test=add-to-cart-sauce-labs-bike-light]",
    BOLT_TS         : "[data-test=add-to-cart-sauce-labs-bolt-t-shirt]",
    FLEECE_JK       : "[data-test=add-to-cart-sauce-labs-fleece-jacket]",
    BBB_OS          : "[data-test=add-to-cart-sauce-labs-onesie]",
    TEST_TS         : `[data-test= "add-to-cart-test.allthethings()-t-shirt-(red)" ]`
}

export const CARRINHO = {
    NUM_CART        : ".shopping_cart_badge",
    LIST_PRODUCTS   : ".inventory_list",
}

export const CHECKOUT = {
    BTN_CHECKOUT    : "[data-test=checkout]",
    INP_FIRSTNAME   : "[data-test=firstName]",
    INP_LASTNAME    : "[data-test=lastName]",
    INP_ZIPCODE     : "[data-test=postalCode]",
    BTN_CHECKOUT_CNT: "[data-test=continue]"
}

export const EXTRAS = {
    IMG_LOGO        : ".login_logo",
    TXT_COPYRIGHT   : ".footer_copy",
    TXT_ERROR       : "[data-test=error]"
}

export const SIDEMEN = {
    BTN_INV         : ".inventory_sidebar_link",
    BTN_ABT         : ".about_sidebar_link",
    BTN_OUT         : ".logout_sidebar_link",
    BTN_RESET       : ".reset_sidebar_link"
}
