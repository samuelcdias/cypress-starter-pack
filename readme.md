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
