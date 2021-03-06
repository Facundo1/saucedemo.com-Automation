const LoginPage = require('../pageobjects/login.page')
const menuPage = require('../pageobjects/menu.page')
const inventoryPage = require('../pageobjects/inventory.page')

describe('Menu items tests', () => {
  it('open and close menu test', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.crossbtn.click()
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
  it('all items test', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.allItemsClick()
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
  it('reset state test', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.resetSideBarClick()
    inventoryPage.open('inventory.html')
    expect(inventoryPage.numberOfProductsInCart).not.toBe(1)
  })
  it('logout test', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.logoutSideBarClick()
    expect(browser).toHaveUrl('https://www.saucedemo.com/')
  })
  it('About test', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    menuPage.menuBtnClick()
    menuPage.aboutClick()
    expect(browser).toHaveUrl('https://saucelabs.com/')
  })
})
