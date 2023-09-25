import express from 'express';
import {LerAlunos,inserir,lerUM,Atualizar,excluir} from './src/aluno.js';

const app = express();
const porta = process.env.PORT || 3306;

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
   // res.send('Aluno em especifico')
   const id = parseInt(req.params.id)
   lerUM(id,res)
})

/* Rota para Todos os Alunos porque quando Você colocar um novo aluno o ID será auto-incrementado,ou seja, você está adicionando um novo aluno em "/alunos" */
app.post('/alunos',(req,res) => {
    const NovoAluno = req.body
    inserir(NovoAluno,res)
})

app.delete('/alunos/:id',(req,res) =>{
   // res.send('Aluno em especifico')
   const id = req.params.id
   excluir(id,res)
})

app.patch('/alunos/:id',(req,res) => {
   // res.send('Atualizando')
   const id = parseInt(req.params.id)
   const aluno = req.body
   Atualizar(id,aluno,res)
})

// Executando o Servidor
app.listen(porta,() => {
    console.log( `Servidor NodeJS rodando na porta ${porta}`);
})