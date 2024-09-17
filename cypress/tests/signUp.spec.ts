import { use } from 'chai'
import LoginPage from '../pages/loginPage'
import SignUpPage from '../pages/signUpPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()

const signUpPage = new SignUpPage()


describe('Login Real World App', () => {
  
  it('Sign Up Success', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpNewUser(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.password, userData.signUpUserSuccess.confirmpassword)

  })

  it('Sign Up Fail First Name', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpFailFirstName(userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.password, userData.signUpUserSuccess.confirmpassword)

  })

  it.only('Sign Up Fail Last Name', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpFailLastName(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.password, userData.signUpUserSuccess.confirmpassword)
  
  })  

  it('Sign Up Fail User Name', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpFailUserName(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.password, userData.signUpUserSuccess.confirmpassword)

  })

  it('Sign Up Fail Password', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpFailPassword(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.confirmpassword)

  })

  it('Sign Up Fail Confirm Password', () => {

    loginPage.accessLoginPage()
    signUpPage.signUpFailConfirmPassword(userData.signUpUserSuccess.firstname, userData.signUpUserSuccess.lastname, userData.signUpUserSuccess.username, userData.signUpUserSuccess.password)

  })

})
