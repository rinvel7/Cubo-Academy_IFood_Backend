let { identificadorAula, instrutores, aulas } = require('../bd');

const cadastrarAula = (req, res)=>{
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body; 

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if(!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor nao existe'});
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);

}

module.exports = {
    cadastrarAula
}
