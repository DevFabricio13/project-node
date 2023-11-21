// Configurando express
const express = require('express');
const app = express();
// Configurando a porta do servidor
const PORT = 3000;
// Conectando banco de dados
const db = require('./db/connection');
// Conectando o Body-parser
const bodyParser = require('body-parser');

// Metodo para notificar se conectou ao banco de dados
db
.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados');
    })
    .catch(err => {
        console.log('Erro ao tentar se conectar', err)
    });

// Usando o body-parser:
app.use(bodyParser.urlencoded({ extended: false })); 

// Rota home:
app.get('/', (request, reply) => {
    reply.send('Está funcionando toda a aplicação');
}); // Essa rota está integrada à rota .post no arquivo "rotas.js". 
//? Rota testada no Postman. Se a request for enviada com sucesso, retornará a reply da rota. 

app.use('/rotas', require('./routes/rotas'));

app.listen(PORT, () => {
    console.log(`O Express está rodando na porta ${PORT}`);
});