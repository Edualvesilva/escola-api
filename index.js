import express from 'express';

const app = express();
const porta = 8080;
app.get('/',(req,res) =>{
    res.send('Raiz da API NODEJS + EXPRESS + MYSQL')
}) 

app.post('/alunos',(req,res) => {
    res.send('Alunos')
})

app.get('/alunos',(req,res) => {
    res.send('TODOSSSSSSSSSSSS')
})

app.get('/alunos/:id',(req,res) => {
    res.send('Aluno em especifico')
})



// Executando o Servidor
app.listen(porta,() => {
    console.log( `Servidor NodeJS rodando na porta ${porta}`);
})