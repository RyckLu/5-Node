import express from "express";

const app = express()
const port = 3000
app.use(express.json())

app.get('/alunos',(req,res) =>{
    res.send('Rota Alunos')
    const alunos = [{id: 1, aluno: 'Rycardo Blanco Silva', RA: '1050292321045', email: 'rycardo.silva@fatec.sp.gov.br'},{id: 2, aluno: 'Paulo Ferreira dos Santos Junior', RA: '1030292321001', email: 'paulo@fatec.sp.gov.br'},{id: 3, aluno: 'Julia Loriato Moreira', RA: '1050292321000', email: 'julia@fatec.sp,gov.br'}]
    res.json(alunos)
})


app.listen(port, () => {
    console.log(`Servidor executando em 
    http//localhost:${port}`)
})