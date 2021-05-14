const Page = require('./page')

class menuPage extends Page {
  //items in cart
  get menuBtn() {
    return $('button[id="react-burger-menu-btn"]')
  }
  get inventorySideBar() {
    return $('a[id="inventory_sidebar_link"]')
  }
  get aboutSideBar() {
    return $('a[id="about_sidebar_link"]')
  }
  get logoutSideBar() {
    return $('a[id="logout_sidebar_link"]')
  }
  get resetAppSideBar() {
    return $('a[id="reset_sidebar_link"]')
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
