const inventoryPage = require('../pageobjects/inventory.page')
const loginPage = require('../pageobjects/login.page')

describe('Filter tests', () => {
  it('order names A to Z', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.aToZFilterClicker()
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.firstProduct,
        inventoryPage.secondProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.secondProduct,
        inventoryPage.thirdProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.thirdProduct,
        inventoryPage.fourthProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.fourthProduct,
        inventoryPage.fivethProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.fivethProduct,
        inventoryPage.sixthProduct
      )
    ).toBe(1)
  })

  it('order names Z to A', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.zToAFilterClicker()
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.firstProduct,
        inventoryPage.secondProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.secondProduct,
        inventoryPage.thirdProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.thirdProduct,
        inventoryPage.fourthProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.fourthProduct,
        inventoryPage.fivethProduct
      )
    ).toBe(1)
    expect(
      inventoryPage.orderLowToHighNames(
        inventoryPage.fivethProduct,
        inventoryPage.sixthProduct
      )
    ).toBe(1)
  })

  it('order price low to high', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.lowToHighFilterClicker()
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.firstPrice.slice(1)),
        parseInt(inventoryPage.secondPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.secondPrice.slice(1)),
        parseInt(inventoryPage.thirdPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.thirdPrice.slice(1)),
        parseInt(inventoryPage.fourthPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.fourthPrice.slice(1)),
        parseInt(inventoryPage.fivethPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.fivethPrice.slice(1)),
        parseInt(inventoryPage.sixthPrice.slice(1))
      )
    ).toBe(1)
  })

  it('order price high to low', () => {
    inventoryPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.highToLowFilterClicker()
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.sixthPrice.slice(1)),
        parseInt(inventoryPage.fivethPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.fivethPrice.slice(1)),
        parseInt(inventoryPage.fourthPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.fourthPrice.slice(1)),
        parseInt(inventoryPage.thirdPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.thirdPrice.slice(1)),
        parseInt(inventoryPage.secondPrice.slice(1))
      )
    ).toBe(1)
    expect(
      inventoryPage.orderPriceLowToHigh(
        parseInt(inventoryPage.secondPrice.slice(1)),
        parseInt(inventoryPage.firstPrice.slice(1))
      )
    ).toBe(1)
  })
})

describe('Cart icon tests', () => {
  it('add product to cart and count items', () => {
    loginPage.open('')
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.firstBtnAddToCartClick()
    inventoryPage.secondBtnAddToCartClick()
    inventoryPage.thirdBtnAddToCartClick()
    inventoryPage.fourthBtnAddToCartClick()
    inventoryPage.fivethBtnAddToCartClick()
    inventoryPage.sixthBtnAddToCartClick()
    expect(parseInt(inventoryPage.numberOfProductsInCart)).toBe(6)
  })
})
