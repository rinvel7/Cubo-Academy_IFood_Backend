const express = require('express')
const pool = require('./conexao')

const app = express()

app.use(express.json())


//app.get('/:id', async (req, res) =>{
app.get('/', async (req, res) =>{
    //const { id } = req.params
    const {pagina, porPagina} = req.query
    try {
        //CONEXAO COM POOL
        // const query = `select * from empresas where nome = $1 or nome = $2`
        // const params = ['Google', 'Facebook']
    
        //const query = `update empresas set site = $1  where id = $2`
        //const params = ['www.cakewall.com', 1]

        //AGRUPANDO TABELAS COM INNER JOIN
        // const query = `
        // select e.id as empresasId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
        // from empresas e
        // join filiais f on e.id = f.empresa_id
        // join pessoas p on e.id = p.empresa_id;
        // `

        // const query = `
        // select e.id as empresasId, f.id as filialId, e.nome, f.pais from empresas e left join filiais f on e.id = f.empresa_id
        // `

        // const query = `
        // select e.id as empresasId, f.id as filialId, e.nome, f.pais 
        // from empresas e 
        // full join filiais f on e.id = f.empresa_id        
        // `

        const query = `
        select * from pessoas order by id asc limit $1 offset $2;
        `
        //retorna o total de pessoas
        const { rowCount } =  await pool.query(`select *from pessoas`) 
        //retorna as paginas por secao
        const offset = pagina === 1 ? 0 : (pagina-1)*porPagina

        const resultado = await pool.query(query,[ porPagina, offset])

        const result = {
            pagina,
            porPagina,
            total:rowCount,
            registro: resultado.rows
        }
        return res.json(result)
    } catch (error) {
        console.log(error.message)     
    }
})

app.listen(3000)