import { use } from 'chai'
import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import HistoricoPage from '../pages/historicoPage'


const loginPage = new LoginPage()

const homePage = new HomePage()

const historicoPage = new HistoricoPage()


describe('Visualizar histórico de transações com sucesso', () => {

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    historicoPage.checkHistoricoPage

  });
});