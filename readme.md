Este é um arquivo modelo para início de testes usando Cypress, typescript e cucumber

Para iniciar utilize os arquivos

`cypress/support/elements`

`cypress/support/pageObjects`

## Identificando os elementos

Crie um arquivo com o nome da página que será utilizada no teste na pasta elements

Utilize um arquivo por paǵina.

Os arquivos poderão ser utilizados no formato do exemplo (classe que retorna um
identificador por função. Coloque como nome da função algo que represente o
elemento e sua funcionalidade/ ou nome do elemento na página)

Ao utilizar essa arquitetura qualquer mudança no identificador do arquivo poderá
ser trocada em um único local e aplicado a todos os locais de impacto. Além de
melhorar a legibilidade do código.

## Executando ações nos elementos

Crie uma arquivo com o nome da página que será utilizada no teste na pasta elements

Importe o arquivo de identificadores da página da pasta elements.

Utilize um arquivo por página.

Os arquivos poderão ser utilizados no formato do exemplo (classe que retorna a
ação a ser realizada pelo cypress)

## Escrevendo cenários de testes

Para escrever cenários de testes no formato utilizado pelo cucumber dever-se-á
criar arquivos do do tipo "\*.feature" na pasta: `cypress/integration`

Sugere-se criar um arquivo .feature por funcionalidade, com vários cenários

Após a criação do arquivo dever-se-á criar uma pasta para cada feature com
o nome dela exatamente igual. Dentro da pasta poderá conter vários arquivos de
teste.

Caso haja necessidade poderão ser adicionados arquivos auxiliares em
`cypress/fixtures`

Da mesma forma poderão sera adicionados comandos que facilitem os testes em
**commands.ts** na pasta `cypress/support`
