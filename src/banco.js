import mysql2 from 'mysql2';

// Armaznedo os dados da conexão em uma constante
const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'

})

// Efetivando a Conexão
// conexao.connect() Essa linha funciona mas não demonstra/Trata o Erro
conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao Conectar: ${erro.message}`)
    } else{
        console.log(`Banco de Dados conectado com Sucesso!`)
    }
})

export default conexao;