const Page = require('./page')

class cartPage extends Page {
  //items in cart
  get itemBoltTshirt() {
    return $('#item_1_title_link > div').getText()
  }
  get itemOnesieTshirt() {
    return $('#item_2_title_link > div').getText()
  }
}

module.exports = new cartPage()
