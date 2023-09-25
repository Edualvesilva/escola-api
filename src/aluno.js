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

// Ler um Aluno
function lerUM(id,res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql,id,(erro,resultados) => {
        if(resultados === 0){
            res.status(204).end();
            return
        }
        if(erro){
            res.status(400).json(erro.code)
        } else{
            res.status(200).json(resultados[0])
        }
    }) 

    }


// Atualizar todos/alguns dados de um aluno
function Atualizar(id,aluno,res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql,[aluno,id],(erro,resultados) => {
        if(erro){
            res.status(400).json(erro.code)
        } else{
            // res.status(200).json({"Status" : "Atualizado com sucesso"})
            res.status(200).json({...aluno,id}) // spread operator
        }
    })
}

// EXCLUIR aluno da base de dados
function excluir(id,res){
    const sql = "DELETE FROM alunos WHERE id = ?";
    conexao.query(sql,id,(erro,resultados) => {
        if(erro){
            res.status(400).json(erro.code)
        } else{
            res.status(200).json({"Status" : "Aluno excluído",id})
        }
    })
}

export { LerAlunos,inserir,lerUM,Atualizar,excluir };
