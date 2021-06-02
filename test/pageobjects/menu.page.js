const Page = require('./page')

class menuPage extends Page {
  //items in cart
  get menuBtn() {
    return $('button[id="react-burger-menu-btn"]')
  }
  get crossbtn() {
    return $('#react-burger-cross-btn')
  }
  get inventorySideBar() {
    return $('#inventory_sidebar_link')
  }
  get aboutSideBar() {
    return $('#about_sidebar_link')
  }
  get logoutSideBar() {
    return $('#logout_sidebar_link')
  }
  get resetAppSideBar() {
    return $('#reset_sidebar_link')
  }

  menuBtnClick() {
    this.menuBtn.click()
  }

  allItemsClick() {
    this.inventorySideBar.click()
  }
  aboutClick() {
    this.aboutSideBar.click()
  }
  logoutSideBarClick() {
    this.logoutSideBar.click()
  }
  resetSideBarClick() {
    this.resetAppSideBar.click()
  }
}

module.exports = new menuPage()
