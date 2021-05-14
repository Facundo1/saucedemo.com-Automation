const Page = require('./page')

class FooterPage extends Page {
  get btnGoToTwitter() {
    return $('a[href="https://twitter.com/saucelabs"]')
  }
  get btnGoToFacebook() {
    return $('a[href="https://www.facebook.com/saucelabs"]')
  }
  get btnGoToLinkedin() {
    return $('a[href="https://www.linkedin.com/company/sauce-labs/"]')
  }

  async goToTwitter() {
    this.btnGoToTwitter.click()
  }
  async goToFacebook() {
    this.btnGoToFacebook.click()
  }
  async goToLinkedin() {
    this.btnGoToLinkedin.click()
  }
  open(path) {
    return super.open(path)
  }
}

module.exports = new FooterPage()
