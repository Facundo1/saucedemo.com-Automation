const Page = require('./page')

class FooterPage extends Page {
  get btnGoToTwitter() {
    return $('li[class="social_twitter"]>a').getAttribute('href')
  }
  get btnGoToFacebook() {
    return $('li[class="social_facebook"]>a').getAttribute('href')
  }
  get btnGoToLinkedin() {
    return $('li[class="social_linkedin"]>a').getAttribute('href')
  }

  open(path) {
    return super.open(path)
  }
}

module.exports = new FooterPage()
