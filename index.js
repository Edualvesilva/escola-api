import express from 'express';
import {LerAlunos,inserir} from './src/aluno.js';

const app = express();
const porta = 8080;

// Adicionando suporte ao formato Json
app.use(express.json())

// Adicionando Suporte a dados vindos de formulários
app.use(express.urlencoded({extended: true}))


app.get('/',(req,res) =>{
    res.send('Raiz da API NODEJS + EXPRESS + MYSQL')
}) 


app.get('/alunos',(req,res) => {
   /*  res.send('TODOSSSSSSSSSSSS') */
   LerAlunos(res)
})

app.get('/alunos/:id',(req,res) => {
    res.send('Aluno em especifico')
})

/* Rota para Todos os Alunos porque quando Você colocar um novo aluno o ID será auto-incrementado,ou seja, você está adicionando um novo aluno em "/alunos" */
app.post('/alunos',(req,res) => {
    const NovoAluno = req.body
    inserir(NovoAluno,res)
})

app.delete('/alunos/:id',(req,res) =>{
    res.send('Aluno em especifico')
})

app.patch('/alunos/:id',(req,res) => {
    res.send('Aluno em especifico')
})

// Executando o Servidor
app.listen(porta,() => {
    console.log( `Servidor NodeJS rodando na porta ${porta}`);
})