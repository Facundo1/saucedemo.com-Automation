const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get usernameField() {
    return $('#user-name')
  }
  get passwordField() {
    return $('#password')
  }
  get btnSubmit() {
    return $('#login-button')
  }
  get errorMsg() {
    return $('form>div[class="error-message-container error"]>h3').getText()
  }
  get dogImg() {
    return $('img[src="/static/media/sl-404.168b1cce.jpg"]').getAttribute('src')
  }
  get titleOfPage() {
    return $(
      '#header_container > div.header_secondary_container > span[class="title"]'
    )
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    this.usernameField.setValue(username)
    this.passwordField.setValue(password)
    this.btnSubmit.click()
  }

  async timeToLoad() {
    this.titleOfPage.waitForDisplayed({ timeout: 2000 })
  }
  /**
   *  overwrite specifc options to adapt it to page object
   */
  open(path) {
    return super.open(path)
  }
}

module.exports = new LoginPage()
