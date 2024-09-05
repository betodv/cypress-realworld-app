class SignUpPage {

    selectorsList() {
        const selectors = {
            signUpOption: "[data-test='signup']",
            sectionTitleTopBar: "[data-test='signup-title']",
            signUpFirstnameField: "[data-test='signup-first-name'] #firstName",
            signUpUserLastnameField: "[data-test='signup-last-name']",
            signUpUsernameField: "[data-test='signup-username']",
            signUpPasswordField: "[data-test='signup-password']",
            signUpConfirmPassField: "[data-test='signup-confirmPassword']",
            signUpButton: "[data-test='signup-submit']",
            firstNameRequired: ".MuiFormHelperText-root",

        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/')
    }    
    signUpNewUser(firstname, lastname, username, password, confirmPassword) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpFirstnameField).type(firstname)
        cy.get(this.selectorsList().signUpUserLastnameField).type(lastname)
        cy.get(this.selectorsList().signUpUsernameField).type(username)
        cy.get(this.selectorsList().signUpPasswordField).type(password)
        cy.get(this.selectorsList().signUpConfirmPassField).type(confirmPassword)
        cy.get(this.selectorsList().signUpButton).click()
        
    }
}

export default SignUpPage