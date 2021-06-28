/// <reference types="Cypress" />

// Arquivo com ações na página
import LoginElements from "../elements/LoginElements";

// Gera uma nova instância do arquivo
const loginElements = new LoginElements();
// Copia a url de acesso ao site do arquivo .env
const url = process.env.URL;

class LoginPage {
  escreverEmail(email: string) {
    return cy.get(loginElements.inputEmail()).type(email);
  }

  escreverSenha(senha: string) {
    return cy.get(loginElements.inputSenha()).type(senha);
  }

  clicarButtonEntrar() {
    return cy.get(loginElements.buttonAcessar()).click();
  }
}

export default LoginPage;
