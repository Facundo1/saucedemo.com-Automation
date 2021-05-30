const LoginPage = require('../pageobjects/login.page')
const FooterPage = require('../pageobjects/footer.page')

describe('Tests social media buttons', () => {
  it('go to twitter', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    expect(FooterPage.btnGoToTwitter).toBe('https://twitter.com/saucelabs')
  })

  it('go to facebook', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')

    expect(FooterPage.btnGoToFacebook).toBe(
      'https://www.facebook.com/saucelabs'
    )
  })

  it('go to linkedin', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    expect(FooterPage.btnGoToLinkedin).toBe(
      'https://www.linkedin.com/company/sauce-labs/'
    )
  })
  it('Footer copyright text', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    expect(FooterPage.footerText).toHaveText(
      '© 2021 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'
    )
  })
})
