# Documentação

Projeto destinado para a criação de uma API com o método GET. 

#### Ferramentas

| Ferramenta | Função |
| ------ | ------ |
| Nodejs | Node.js é uma plataforma para construir aplicações web escaláveis de alta performance usando JavaScript |
| Express |  Express.js ele é um framework do Node.js que nos auxilia na construção das nossas aplicações Web, baseado no protocolo HTTP.|

#### Como rodar o projeto?
Após você clonar o projeto, certifique-se que você está na pasta que contém o arquivo ```server.js```. Em seguida, siga os passos abaixo:

```sh
$ npm install
$ node server.js
```


#### Como testar a API de estudantes?

Utilizaremos o [Insomnia](https://insomnia.rest/) para testar as requisições e respostas. Com o servidor **rodando**, verifique a **porta** que você está utilizando, em seguida, acesse a ferramenta e vamos lá:

* Crie uma ```nova Request```, atribuindo o nome dela, método ```GET``` e em seguida, clique em ```criar```.
* Para testar, insira a url http://localhost:3000/estudantes e clique em ```send``` ou ```enviar``` .
* Se estiver tudo okay, aparecerá a response com o arquivo json com todos os estudantes. 

