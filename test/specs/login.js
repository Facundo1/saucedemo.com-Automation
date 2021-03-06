const LoginPage = require('../pageobjects/login.page')

describe('Tests with invalid credentials', () => {
  it('username and password with empty characters', () => {
    LoginPage.open('')
    LoginPage.login('', '')
    expect(LoginPage.errorMsg).toBe('Epic sadface: Username is required')
  })

  it('username and password with incorrect credentials', () => {
    LoginPage.open('')
    LoginPage.login('aaaa', 'bbbb')
    expect(LoginPage.errorMsg).toBe(
      'Epic sadface: Username and password do not match any user in this service'
    )
  })

  it('username and password with empty password', () => {
    LoginPage.open('')
    LoginPage.login('Facundo', '')
    expect(LoginPage.errorMsg).toBe('Epic sadface: Password is required')
  })

  it('username and password with empty username', () => {
    LoginPage.open('')
    LoginPage.login('', 'Facu1234')
    expect(LoginPage.errorMsg).toBe('Epic sadface: Username is required')
  })
})

describe('Tests of locked users', () => {
  it('using locked_out_user', () => {
    LoginPage.open('')
    LoginPage.login('locked_out_user', 'secret_sauce')
    expect(LoginPage.errorMsg).toBe(
      'Epic sadface: Sorry, this user has been locked out.'
    )
  })
})

describe('Problem user test', () => {
  it('problem_user navigate to main page', () => {
    LoginPage.open('')
    LoginPage.login('problem_user', 'secret_sauce')
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
  it('testing photo when problem_user is logged', () => {
    LoginPage.open('')
    LoginPage.login('problem_user', 'secret_sauce')
    expect(LoginPage.dogImg).toBe(
      'https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg'
    )
  })
})

describe(' performance_glitch_user tests', () => {
  it('time to navigate to inventory.html is bigger than 3 secods', () => {
    LoginPage.open('')
    LoginPage.login('performance_glitch_user', 'secret_sauce')
    browser.setTimeout({
      pageLoad: 5000
    })
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
})

describe('Test with standar user', () => {
  it('Should login with standard_user', () => {
    LoginPage.open('')
    LoginPage.login('standard_user', 'secret_sauce')
    expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
})
