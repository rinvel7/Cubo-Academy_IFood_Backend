const { json } = require('express');
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
};

const listarAulas = (req, res)=>{
    return res.json(aulas);
};

const obterAulas = (req, res)=>{
    const { id } = req.params;

    const aula = aulas.find((aula)=>{
        return aula.id === Number(id);
    }) 
    if(!aula){
        return res.status(404).json({
            mensagem: 'Aula nao encontrada'
        });
    }
    return res.json(aula);
};

const obterAulaInstrutor = (req, res)=>{
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if(!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor nao existe'});
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    return res.status(200).json(aulasEncontradas);
}

module.exports = {
    cadastrarAula,
    listarAulas,
    obterAulas,
    obterAulaInstrutor
}
