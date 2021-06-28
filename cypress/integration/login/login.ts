import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import LoginPage from "../../support/pageObjects/LoginPage";

const loginPage = new LoginPage();
const url = "https://bildsys-ged.mazzafc.tech";

Given("que o usuario acessou o site", () => {
  console.log(url)
  cy.visit(url);
});

When("inserir dados válidos", () => {
  cy.fixture("conta").then( (usuario) => {
    loginPage.escreverEmail(usuario.email);
    loginPage.escreverSenha(usuario.senha)
  });

});

When("clicar em entrar", () => {
  loginPage.clicarButtonEntrar()
});

Then("o usuário do sistema deverá acessar o sistema", () => {
  cy.location('pathname', {timeout: 60000})
  .should('include', '/');
  cy.log("Logado com sucesso")
});
