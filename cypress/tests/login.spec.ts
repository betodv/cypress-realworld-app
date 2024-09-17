import { use } from 'chai'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'



const loginPage = new LoginPage()

const homePage = new HomePage()


describe('Login Real World App', () => {
  

  it.only('Login Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    //homePage.checkHomePage()
    
  })

  it('Login Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  })  

})