import conexao from './banco.js';

// CRUD 

// Ler/Exibir todos os alunos
function LerAlunos(res) {
    const sql = 'SELECT * FROM alunos';

    conexao.query(sql, (erro, resultados) => {
        // verificação para ver se há conteúdo
        if (resultados.length === 0) {
            res.status(204).end(); // É importante trabalhar com os status http. 204 = sem conteúdo . .end() encerra a execução.
            return;
        }

        if (erro) {
            res.status(400).json(erro.code); // BAD Request
        } else {
            res.status(200).json(resultados);
        }
    }
    )
}

// INSERINDO alunos no Banco de Dados

function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?";
    conexao.query(sql,aluno,(erro) => {
        if(erro) {
            res.status(400).json(erro.code)
        } else{
            res.status(201).json({ "Status" : "Aluno inserido" })
        }
    })
}

export { LerAlunos };
export { inserir }