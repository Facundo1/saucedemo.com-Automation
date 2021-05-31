const Page = require('./page')

class checkOutPage extends Page {
  //Title message
  get titleMsg() {
    return $(
      '#header_container > div.header_secondary_container > span'
    ).getText()
  }

  //Check out button
  get checkOutBtn() {
    return $('#checkout')
  }
  //Continue button
  get continueBtn() {
    return $('#continue')
  }
  //Error check out message
  get errorCheckMsg() {
    return $(
      '#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3'
    ).getText()
  }
  //Input first name
  get inputFirstName() {
    return $('#first-name')
  }
  //Input last name
  get inputLastName() {
    return $('#last-name')
  }
  //Input postal code
  get inputPostalCode() {
    return $('#postal-code')
  }
  //Finish button
  get finishBtn() {
    return $('#finish')
  }
  //Back home button
  get backHomeBtn() {
    return $('#back-to-products')
  }
  //Cancel button
  get cancelBtn() {
    return $('#cancel')
  }
  //Continue shopping button
  get continueShopBtn() {
    return $('#continue-shopping')
  }

  async checkOutBtnClick() {
    this.checkOutBtn.click()
  }
  async continueBtnClick() {
    this.continueBtn.click()
  }
  async finishBtnClick() {
    this.finishBtn.click()
  }
  async backHomeBtnClick() {
    this.backHomeBtn.click()
  }
  async cancelBtnClick() {
    this.cancelBtn.click()
  }
  async continueShopBtnClick() {
    this.continueShopBtn.click()
  }
}

module.exports = new checkOutPage()
