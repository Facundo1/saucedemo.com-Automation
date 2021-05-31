const menuPage = require('../pageobjects/menu.page')
const checkOutPage = require('../pageobjects/checkOut.page')
const inventoryPage = require('../pageobjects/inventory.page')
const loginPage = require('../pageobjects/login.page')

describe('Checkout tests', () => {
  it('title of the checkout page test', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    expect(checkOutPage.titleMsg).toBe('CHECKOUT: YOUR INFORMATION')
    browser.pause(3000)
  })
  it('first name field empty', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.continueBtnClick()
    expect(checkOutPage.errorCheckMsg).toBe('Error: First Name is required')
    browser.pause(3000)
  })
  it('last name field empty', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.inputFirstName.setValue('Facundo')
    checkOutPage.continueBtnClick()
    expect(checkOutPage.errorCheckMsg).toBe('Error: Last Name is required')
    browser.pause(3000)
  })
  it('postal code field empty', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.inputFirstName.setValue('Facundo')
    checkOutPage.inputLastName.setValue('aaa')
    checkOutPage.continueBtnClick()
    expect(checkOutPage.errorCheckMsg).toBe('Error: Postal Code is required')
    browser.pause(3000)
  })
  it('Valid credentials on checkout', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.inputFirstName.setValue('Facundo')
    checkOutPage.inputLastName.setValue('aaa')
    checkOutPage.inputPostalCode.setValue('2200')
    checkOutPage.continueBtnClick()
    expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-step-two.html'
    )
    browser.pause(3000)
  })
  it('Finish checkout', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.inputFirstName.setValue('Facundo')
    checkOutPage.inputLastName.setValue('aaa')
    checkOutPage.inputPostalCode.setValue('2200')
    checkOutPage.continueBtnClick()
    checkOutPage.finishBtnClick()
    expect(browser).toHaveUrl(
      'https://www.saucedemo.com/checkout-complete.html'
    )
    browser.pause(3000)
  })
  it('Back home', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.clickOnCart()
    checkOutPage.checkOutBtnClick()
    checkOutPage.inputFirstName.setValue('Facundo')
    checkOutPage.inputLastName.setValue('aaa')
    checkOutPage.inputPostalCode.setValue('2200')
    checkOutPage.continueBtnClick()
    checkOutPage.finishBtnClick()
    checkOutPage.backHomeBtnClick()
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    browser.pause(3000)
  })
})
