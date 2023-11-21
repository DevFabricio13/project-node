const express = require("express");
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (request, reply) => {
    reply.send('A rota do arquivo "rotas.js, deu certo!');
});

// Adicionando Job via POST:
router.post('/add', (request, reply) => { 
// Requisição do corpo da aplicação do Job, irei receber através do (body-parser);
    let {title, salary, company, description, email, new_job} = request.body;  

    // inserindo dados do arquivo Job
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job,
    })
    .then(() => reply.redirect('/')) // Se der certo, retornará para o home.
    .catch(err => console.log(err));
});

module.exports = router;