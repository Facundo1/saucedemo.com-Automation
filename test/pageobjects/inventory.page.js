const Page = require('./page')

class inventoryPage extends Page {
  // Filter selectors
  get filterCombobox() {
    return $(
      '#header_container > div.header_secondary_container > div.right_component > span > select'
    )
  }
  get aToZFilterOption() {
    return $(
      '#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(1)'
    )
  }
  get zToAFilterOption() {
    return $(
      '#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(2)'
    )
  }
  get lowToHighFilterOption() {
    return $(
      '#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)'
    )
  }
  get highToLowFilterOption() {
    return $(
      '#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(4)'
    )
  }

  // Products name selectors
  get firstProduct() {
    return $('#item_4_title_link > div').getText()
  }
  get secondProduct() {
    return $('#item_0_title_link > div').getText()
  }
  get thirdProduct() {
    return $('#item_1_title_link > div').getText()
  }
  get fourthProduct() {
    return $('#item_5_title_link > div').getText()
  }
  get fivethProduct() {
    return $('#item_2_title_link > div').getText()
  }
  get sixthProduct() {
    return $('#item_3_title_link > div').getText()
  }

  // Products Price selectors
  get firstPrice() {
    return $(
      '#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }
  get secondPrice() {
    return $(
      '#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }
  get thirdPrice() {
    return $(
      '#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }
  get fourthPrice() {
    return $(
      '#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }
  get fivethPrice() {
    return $(
      '#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }
  get sixthPrice() {
    return $(
      '#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div'
    ).getText()
  }

  //Add To cart buttons
  get firstBtnAddToCart() {
    return $('#add-to-cart-sauce-labs-backpack')
  }
  get secondBtnAddToCart() {
    return $('#add-to-cart-sauce-labs-bike-light')
  }
  get thirdBtnAddToCart() {
    return $('#add-to-cart-sauce-labs-bolt-t-shirt')
  }
  get fourthBtnAddToCart() {
    return $('#add-to-cart-sauce-labs-fleece-jacket')
  }
  get fivethBtnAddToCart() {
    return $('#add-to-cart-sauce-labs-onesie')
  }
  get sixthBtnAddToCart() {
    return $('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
  }

  //Remove from cart buttons
  get firstBtnRemoveFromCart() {
    return $('#remove-sauce-labs-backpack')
  }
  get secondBtnRemoveFromCart() {
    return $('#remove-sauce-labs-bike-light')
  }
  get thirdBtnRemoveFromCart() {
    return $('#remove-sauce-labs-bolt-t-shirt')
  }
  get fourthBtnRemoveFromCart() {
    return $('#remove-sauce-labs-fleece-jacket')
  }
  get fivethBtnRemoveFromCart() {
    return $('#remove-sauce-labs-onesie')
  }
  get sixthBtnRemoveFromCart() {
    return $('button[id="remove-test.allthethings()-t-shirt-(red)"]')
  }

  //Images of products
  get productImg() {
    return $('.inventory_item_img')
  }

  //Detail products selectors
  get productDesc() {
    return $('.inventory_details_desc')
  }
  get productPrice() {
    return $('.inventory_details_price')
  }
  get backpackAddBtn() {
    return $('#add-to-cart-sauce-labs-backpack')
  }
  get backpackRemoveBtn() {
    return $('#remove-sauce-labs-backpack')
  }
  get backBtn() {
    return $('#back-to-products')
  }

  //Cart
  get numberOfProductsInCart() {
    return $('#shopping_cart_container > a[class=shopping_cart_link]').getText()
  }
  get cartBtn() {
    return $('div[id="shopping_cart_container"] > a')
  }
  get cartBadge() {
    return $('.shopping_cart_badge')
  }

  // Filter combobox options
  async aToZFilterClicker() {
    this.filterCombobox.click()
    this.aToZFilterOption.click()
  }
  async zToAFilterClicker() {
    this.filterCombobox.click()
    this.zToAFilterOption.click()
  }
  async lowToHighFilterClicker() {
    this.filterCombobox.click()
    this.lowToHighFilterOption.click()
  }
  async highToLowFilterClicker() {
    this.filterCombobox.click()
    this.highToLowFilterOption.click()
  }

  // add to cart buttons of productos click
  async firstBtnAddToCartClick() {
    this.firstBtnAddToCart.click()
  }
  async secondBtnAddToCartClick() {
    this.secondBtnAddToCart.click()
  }
  async thirdBtnAddToCartClick() {
    this.thirdBtnAddToCart.click()
  }
  async fourthBtnAddToCartClick() {
    this.fourthBtnAddToCart.click()
  }
  async fivethBtnAddToCartClick() {
    this.fivethBtnAddToCart.click()
  }
  async sixthBtnAddToCartClick() {
    this.sixthBtnAddToCart.click()
  }

  //Btn cart click
  async clickOnCart() {
    this.cartBtn.click()
  }

  //Btn add and remove from cart detail page
  addToCart() {
    this.backpackAddBtn.click()
  }

  //Check if word is less than word2
  orderLowToHighNames(word, word2) {
    const minimum = Math.min(word.length, word2.length)
    for (let i = 0; i <= minimum - 1; i++) {
      if (word[i] > word2[i]) return 0
      if (word[i] !== word2[i]) return 1
    }
    return 1
  }

  orderPriceLowToHigh(num, num2) {
    if (num <= num2) return 1
    else return 0
  }

  open(path) {
    return super.open(path)
  }
}

module.exports = new inventoryPage()
