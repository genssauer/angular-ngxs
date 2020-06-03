# Avaliação MJV
MJV Developer Test

## Docker

Baixe e instale o Docker em https://www.docker.com/

Após instalado abra o terminal e execute `docker run --name ecommerce -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`.
Execute `docker ps` para exibir os Containers ativos.
Execute `docker start ecommerce` caso não esteja ativo.

## Executando a API

Execute `cd api` em um terminal para entrar no diretório da api;
Execute `npm install` para instalar as dependências;
Execute `adonis migration:refresh --force` para criar as tabelas no banco de dados;
Execute `adonis seed --force` para adicionar os registros no banco de dados;
Execute `adonis serve --dev` para executar o servidor.

## Executando a Aplicação

Execute `cd ecommerce` em um terminal para entrar no diretório da aplicação;
Execute `npm install` para instalar as dependências;
Execute `ng serve` para executar a aplicação no browser.

## Testes

Loja: http://localhost:4200
Painel: http://localhost:4200/admin
E-mail: test@mjv.com.br
Senha: 123456
