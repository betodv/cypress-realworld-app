class HomePage {

    selectorsList() {
        const selectors = {

            homeTransationTopBar: ".MuiTabs-root",

        }

        return selectors
    }   
   
    checkHomePage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().homeTransationTopBar).should('be.visible')
    }

}

export default HomePage