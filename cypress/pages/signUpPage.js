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
            firstNameRequired: "[data-test='signup-first-name']",
            lastNameRequired: "[data-test='signup-last-name']",
            userNameRequired: "[data-test='signup-username']",
            passwordRequired: "[data-test='signup-password']",
            confirmPasswordRequired: "[data-test='signup-confirmPassword']",
            actionClick: ".makeStyles-root-1"

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

    signUpFailFirstName(lastname, username, password, confirmPassword) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpUserLastnameField).type(lastname)
        cy.get(this.selectorsList().signUpUsernameField).type(username)
        cy.get(this.selectorsList().signUpPasswordField).type(password)
        cy.get(this.selectorsList().signUpConfirmPassField).type(confirmPassword)
        cy.get(this.selectorsList().firstNameRequired).should('be.visible')

    }

    signUpFailLastName(firstname, username, password, confirmPassword) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpFirstnameField).type(firstname)
        cy.get(this.selectorsList().signUpUserLastnameField).click()
        cy.get(this.selectorsList().signUpUsernameField).type(username)
        cy.get(this.selectorsList().signUpPasswordField).type(password)
        cy.get(this.selectorsList().signUpConfirmPassField).type(confirmPassword)
        cy.get(this.selectorsList().lastNameRequired).should('be.visible')

    }

    signUpFailUserName(firstname, lastname, password, confirmPassword) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpFirstnameField).type(firstname)
        cy.get(this.selectorsList().signUpUserLastnameField).type(lastname)
        cy.get(this.selectorsList().signUpUsernameField).click()
        cy.get(this.selectorsList().signUpPasswordField).type(password)
        cy.get(this.selectorsList().signUpConfirmPassField).type(confirmPassword)
        cy.get(this.selectorsList().userNameRequired).should('be.visible')
    }

    signUpFailPassword(firstname, lastname, username, confirmPassword) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpFirstnameField).type(firstname)
        cy.get(this.selectorsList().signUpUserLastnameField).type(lastname)
        cy.get(this.selectorsList().signUpUsernameField).type(username)
        cy.get(this.selectorsList().signUpPasswordField).click()
        cy.get(this.selectorsList().signUpConfirmPassField).type(confirmPassword)
        cy.get(this.selectorsList().passwordRequired).should('be.visible')
        cy.get(this.selectorsList().confirmPasswordRequired).should('be.visible')
    
    }

    signUpFailConfirmPassword(firstname, lastname, username, password) {

        cy.get(this.selectorsList().signUpOption).click()
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().sectionTitleTopBar).should('be.visible')
        cy.get(this.selectorsList().signUpFirstnameField).type(firstname)
        cy.get(this.selectorsList().signUpUserLastnameField).type(lastname)
        cy.get(this.selectorsList().signUpUsernameField).type(username)
        cy.get(this.selectorsList().signUpPasswordField).type(password)
        cy.get(this.selectorsList().signUpConfirmPassField).click()
        cy.get(this.selectorsList().actionClick).click()
        cy.get(this.selectorsList().confirmPasswordRequired).should('be.visible')
        
    }

}

export default SignUpPage