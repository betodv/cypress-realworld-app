import { use } from 'chai'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import TransferenciaPage from '../pages/transferenciaPage'

const loginPage = new LoginPage()

const homePage = new HomePage()

const transferenciaPage = new TransferenciaPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  
  it('transferencia com saldo suficiente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.checkHomePage()
    transferenciaPage.enviarDinheiroComSaldo(userData.testeTransferencia.searchname, userData.testeTransferencia.amount, userData.testeTransferencia.note)
  })   
})

describe('Enviar dinheiro com saldo insuficiente', () => {
  
  it.only('Deve exibir mensagem de erro ao enviar dinheiro sem saldo insuficiente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    homePage.checkHomePage()
    transferenciaPage.enviarDinheiroComSaldoInsuficiente(userData.testeTransferencia.searchname, userData.testeTransferencia.note)
  })
})