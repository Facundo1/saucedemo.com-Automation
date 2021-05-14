const LoginPage = require('../pageobjects/login.page')
const cartPage = require('../pageobjects/cart.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('Tests products really added in cart', () => {
  it('Test if bolt and onesie shirts are added', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    inventoryPage.thirdBtnAddToCartClick()
    inventoryPage.fivethBtnAddToCartClick()
    inventoryPage.clickOnCart()
    expect(cartPage.itemBoltTshirt).toBe('Sauce Labs Bolt T-Shirt')
    expect(cartPage.itemOnesieTshirt).toBe('Sauce Labs Onesie')
  })
})
