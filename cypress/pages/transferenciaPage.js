
import userData from '../fixtures/userData.json'


function setAccountBalance() {
    cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
        const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g,""));
        let amountGreaterThanBalance = accountBalance * 1.1;
    });
}


class TransferenciaPage {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[type='submit']",
            wrongCredentialAlert: "[data-test='signin-error']",

            newButton: "[data-test='nav-top-new-transaction']",
            confirmTransationPage: ".MuiGrid-grid-xs-12",
            searchNameField: "[placeholder='Search...']",
            nameSearched: "[data-test='users-list']",
            amountField: "[placeholder='Amount']",
            addNoteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            transationSubmitted: "[data-test='alert-bar-success']",

            valorSaldo: "[data-test='sidenav-user-balance']",   
        }

        return selectors
    }

    enviarDinheiroComSaldo(searchname, amount, note) {
        cy.get(this.selectorsList().newButton).click()
        cy.location('pathname').should('equal', '/transaction/new')
        cy.get(this.selectorsList().searchNameField).type(searchname)
        cy.get(this.selectorsList().nameSearched).contains(userData.testeTransferencia.searchname).click()
        cy.get(this.selectorsList().amountField).type(amount)       
        cy.get(this.selectorsList().addNoteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().transationSubmitted)
    }
 
    enviarDinheiroComSaldoInsuficiente(searchname, note) {
        cy.get(this.selectorsList().newButton).click()
        cy.location('pathname').should('equal', '/transaction/new')
        cy.get(this.selectorsList().searchNameField).type(searchname)
        cy.get(this.selectorsList().nameSearched).contains(userData.testeTransferencia.searchname).click()
        // Captura o saldo e calcula um valor maior que o saldo disponível
        cy.get('[data-test="sidenav-user-balance"]').then(($balance) => {
            const accountBalance = parseFloat($balance.text().replace(/[^0-9.-]+/g, ""));
            let amountGreaterThanBalance = accountBalance * 1.1;
            // Digita o valor maior que o saldo
            cy.get(this.selectorsList().amountField).type(amountGreaterThanBalance.toFixed(2));
        });
        cy.get(this.selectorsList().addNoteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().transationSubmitted)
    }           
}

export default TransferenciaPage

