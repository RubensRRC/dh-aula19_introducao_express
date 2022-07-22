// Importando o Express para o projeto
const Express = require('express');

// Inicializando o Express no projeto Nodejs.
const Aplicativo = new Express();

// Configurei a porta de acesso aos recursos do Express via Http.
Aplicativo.listen(1234, () => console.log(" Servidor Okay..."));