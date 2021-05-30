const ProductsPage = require('../pageobjects/inventory.page')
const loginPage = require('../pageobjects/login.page')

describe('Products detail tests', () => {
  it('click on product goes to description', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    expect(browser).toHaveUrl(
      'https://www.saucedemo.com/inventory-item.html?id=4'
    )
  })
  it('product description test', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    expect(ProductsPage.productDesc).toHaveTextContaining([
      'carry.allTheThings()',
      'with unequaled laptop and tablet protection.'
    ])
  })
  it('price of product test', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    expect(ProductsPage.productPrice).toHaveText('$29.99')
  })
  it('product added to cart in detail page', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    ProductsPage.addToCart()
    expect(ProductsPage.cartBadge).toBeDisplayed()
  })
  it('product removed from cart in detailpage', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    ProductsPage.backpackRemoveBtn.click()
    expect(ProductsPage.cartBadge).not.toBeDisplayed()
  })
  it('Back to products btn goes back to inventory page', () => {
    ProductsPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    ProductsPage.productImg.click()
    ProductsPage.backBtn.click()
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
})
