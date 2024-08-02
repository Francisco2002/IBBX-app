# Desafio IBBX - APP

Nesse desafio, implementei um sistema de coletas de sensores cadastrados em ativos.

## Ativos
* A aplicação permite a listagem, criação e exclusão de ativos.

## Sensores
* A aplicação permite a listagem, criação e exclusão de sensores.
* Ao selecionar um ativo, a listagem é atualizada para os sensores pertencentes ao ativo selecionado.

## Leituras
* A aplicação permite a listagem, criação e exclusão de leitura sensores.
* É exibido, acima da listagem, um gráfico de linha que contém as leituras por data.
* Ao selecionar um sensor, a listagem e o gráfico são atualizados para as leituras do sensor selecionado.
* O sistema, atualmente, só permite a criação de uma leitura por dia. Ao tentar criar uma nova leitura em uma data já cadastrada, aquela será atualizada.
* Não é permitido a criação de leituras de sensor em datas posteriores a atual.

Como rodar a aplicação:

1. Instalar as dependencias do projeto:
    npm install

2. Executar o comando, para rodar o servidor
    npm run start