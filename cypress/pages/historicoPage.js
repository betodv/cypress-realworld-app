class HistoricoPage {

    selectorsList() {
        const selectors = {

            mineButton: "[data-test='nav-personal-tab']"

        }

        return selectors
    }   
   
    checkHistoricoPage() {
        
        cy.location('pathname').should('equal', '/personal')
    }

}

export default HistoricoPage