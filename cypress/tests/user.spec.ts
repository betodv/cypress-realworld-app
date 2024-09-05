import { use } from 'chai'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import SignUpPage from '../pages/signUpPage'

const loginPage = new LoginPage()

const signUpPage = new SignUpPage()

describe('Real World App', () => {
  

const selectorsList = {
  //SignUP
  
  
  //Login
  
  homeTransationTopBar: ".MuiTabs-root",
  

  //Dados de Transação
  newTrasactionButton: "[href='/transaction/new']",
  confirmTrasactionPage: ".MuiStepLabel-active",
  searchField: "[placeholder='Search...']",
  selectedName: "[data-test='user-list-item-WuSwaOqnJN']",
  confirmPaymentPage: ".MuiStepLabel-active",
  amountField: "[placeholder='Amount']",
  noteField: "[placeholder='Add a note']",
  payButton: "[data-test='transaction-create-submit-payment']",
  confirmCompletePage: ".MuiStepLabel-completed",
  transactionConfirmed: "alert-bar-success",

  userBalance: "[data-test='sidenav-user-balance']"


}
//Enviar dinheiro com saldo insuficiente
it('Send money with insufficient balance', () => {
  cy.visit('/')
  cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
  cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
  cy.get(selectorsList.signInButton).click()
  cy.get(selectorsList.homeTransationTopBar)
  cy.get(selectorsList.newTrasactionButton).click()
  cy.get(selectorsList.confirmTrasactionPage)
  cy.get(selectorsList.searchField).type(userData.searchTransaction.searchname)
  cy.get(selectorsList.selectedName).click()
  cy.get(selectorsList.confirmPaymentPage)
  cy.get(selectorsList.amountField).type(userData.searchTransaction.amount)
  cy.get(selectorsList.noteField).type(userData.searchTransaction.note)
  //cy.get(selectorsList.payButton).click()
  // Captura o saldo atual do usuário
  //cy.get("[data-test='sidenav-user-balance']").then(($saldo) => {
    //const saldoAtual = parseFloat($saldo.text().replace('$', '').trim());
  // Simule o envio de um valor maior que o saldo
  //const valorEnvio = saldoAtual + 100; // Exemplo: valor maior que o saldo
  //cy.get(selectorsList.amountField).type(userData.searchTransaction.amount.toString());  

}) 

//Enviar dinheiro com saldo suficiente
it('Send money with sufficient balance', () => {
  cy.visit('/')
  cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
  cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
  cy.get(selectorsList.signInButton).click()
  cy.get(selectorsList.homeTransationTopBar)
  cy.get(selectorsList.newTrasactionButton).click()
  cy.get(selectorsList.confirmTrasactionPage)
  cy.get(selectorsList.searchField).type(userData.searchTransaction.searchname)
  cy.get(selectorsList.selectedName).click()
  cy.get(selectorsList.confirmPaymentPage)
  cy.get(selectorsList.amountField).type(userData.searchTransaction.amount)
  cy.get(selectorsList.noteField).type(userData.searchTransaction.note)
  cy.get(selectorsList.payButton).click()
  cy.get(selectorsList.confirmCompletePage).eq(2)
  //cy.get('body').should('contain', 'Transaction Submitted!')
  cy.get('[data-test="alert-bar-success"]')
})

it.only('Sign Up Success', () => {

  signUpPage.accessLoginPage()
  signUpPage.signUpNewUser(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.password, userData.signUpUserSuccess.confirmpassword )
  //cy.visit('/')
  //cy.get(selectorsList.signUpOption).click()
  //cy.get(selectorsList.sectionTitleTopBar)
  //cy.get(selectorsList.signUpFirstnameField).type(userData.signUpUserSuccess.firstname)
  //cy.get(selectorsList.signUpUserLastnameField).type(userData.signUpUserSuccess.lastname)
  //cy.get(selectorsList.signUpUsernameField).type(userData.signUpUserSuccess.username)
  //cy.get(selectorsList.signUpPasswordField).type(userData.signUpUserSuccess.password)
  //cy.get(selectorsList.signUpConfirmPassField).type(userData.signUpUserSuccess.confirmpassword)
  //cy.get(selectorsList.signInButton).click() 
})

it('Sign Up Fail First Name', () => {
  cy.visit('/')
  cy.get(selectorsList.signUpOption).click()
  cy.get(selectorsList.sectionTitleTopBar)
  cy.get(selectorsList.signUpUserLastnameField).click()
  cy.get('#firstName-helper-text')
  cy.get(selectorsList.signUpUserLastnameField).type(userData.signUpUserSuccess.lastname)
  cy.get(selectorsList.signUpUsernameField).type(userData.signUpUserSuccess.username)
  cy.get(selectorsList.signUpPasswordField).type(userData.signUpUserSuccess.password)
  cy.get(selectorsList.signUpConfirmPassField).type(userData.signUpUserSuccess.confirmpassword)
  cy.get(selectorsList.sectionTitleTopBar)
})

it('Sign Up Fail Last Name', () => {
  cy.visit('/')
  cy.get(selectorsList.signUpOption).click()
  cy.get(selectorsList.sectionTitleTopBar)
  cy.get(selectorsList.signUpFirstnameField).type(userData.signUpUserSuccess.firstname)
  cy.get(selectorsList.signUpUserLastnameField).click()
  cy.get(selectorsList.signUpUsernameField).click()
  cy.get('#lastName-helper-text')
  cy.get(selectorsList.signUpUsernameField).type(userData.signUpUserSuccess.username)
  cy.get(selectorsList.signUpPasswordField).type(userData.signUpUserSuccess.password)
  cy.get(selectorsList.signUpConfirmPassField).type(userData.signUpUserSuccess.confirmpassword)
  cy.get(selectorsList.sectionTitleTopBar)
})

it('Sign Up Fail Username', () => {
  cy.visit('/')
  cy.get(selectorsList.signUpOption).click()
  cy.get(selectorsList.sectionTitleTopBar)
  cy.get(selectorsList.signUpFirstnameField).type(userData.signUpUserSuccess.firstname)
  cy.get(selectorsList.signUpUserLastnameField).type(userData.signUpUserSuccess.lastname)
  cy.get(selectorsList.signUpUsernameField).click()
  cy.get(selectorsList.signUpPasswordField).click()
  cy.get('#username-helper-text')
  cy.get(selectorsList.signUpPasswordField).type(userData.signUpUserSuccess.password)
  cy.get(selectorsList.signUpConfirmPassField).type(userData.signUpUserSuccess.confirmpassword)
  cy.get(selectorsList.sectionTitleTopBar)
})

it('Sign Up Fail Password', () => {
  cy.visit('/')
  cy.get(selectorsList.signUpOption).click()
  cy.get(selectorsList.sectionTitleTopBar)
  cy.get(selectorsList.signUpFirstnameField).type(userData.signUpUserSuccess.firstname)
  cy.get(selectorsList.signUpUserLastnameField).type(userData.signUpUserSuccess.lastname)
  cy.get(selectorsList.signUpUsernameField).type(userData.signUpUserSuccess.username)
  cy.get(selectorsList.signUpPasswordField).click()
  cy.get(selectorsList.signUpConfirmPassField).click()
  cy.get('#password-helper-text')
  cy.get(selectorsList.signUpConfirmPassField).type(userData.signUpUserSuccess.confirmpassword)
  cy.get('#confirmPassword-helper-text')
  cy.get(selectorsList.sectionTitleTopBar)
})

it('Sign Up Fail Confirm Password', () => {
  cy.visit('/')
  cy.get(selectorsList.signUpOption).click()
  cy.get(selectorsList.sectionTitleTopBar)
  cy.get(selectorsList.signUpFirstnameField).type(userData.signUpUserSuccess.firstname)
  cy.get(selectorsList.signUpUserLastnameField).type(userData.signUpUserSuccess.lastname)
  cy.get(selectorsList.signUpUsernameField).type(userData.signUpUserSuccess.username)
  cy.get(selectorsList.signUpPasswordField).type(userData.signUpUserSuccess.password)
  cy.get(selectorsList.signUpConfirmPassField).click()
  cy.get('.makeStyles-root-1').click()
  cy.get('#confirmPassword-helper-text')
  cy.get(selectorsList.sectionTitleTopBar)
})

  it('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
  })

  it('Login Fail', () => {
    cy.visit('/')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.signInButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })  

})