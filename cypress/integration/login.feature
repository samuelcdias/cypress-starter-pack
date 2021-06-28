Feature: Realizar login
    Background: Página de login
        Given que o usuario acessou o site

    @valid
    Scenario: Inserir dados válidos
        When inserir dados válidos
        And clicar em entrar
        Then o usuário do sistema deverá acessar o sistema
