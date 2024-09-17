class MenuPage {

    selectorsList() {
        const selectors = {

            homeButton: '[data-test="sidenav-home"]',

        }

        return selectors
    } 

    accessHome() {
        cy.get(this.selectorsList().homeButton).click()
    }


}   

export default MenuPage