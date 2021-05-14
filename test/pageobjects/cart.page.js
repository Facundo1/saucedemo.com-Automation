const Page = require('./page')

class cartPage extends Page {
  //items in cart
  get itemBoltTshirt() {
    return $('#item_1_title_link > div').getText()
  }
  get itemOnesieTshirt() {
    return $('#item_2_title_link > div').getText()
  }
  get btnContinueShopping() {
    return $('button[id="continue-shopping"]')
  }

  //empty cart div
  get emptyCart() {
    return $(
      '#cart_contents_container > div > div.cart_list > div[class="removed_cart_item"]'
    ).getAttribute('class')
  }

  continueShoppingClick() {
    this.btnContinueShopping.click()
  }
}

module.exports = new cartPage()
