const { instrutores } = require ('../bd')
let { identificadorInstrutor } = require ('../bd')

const listarInstrutores = (req, res)=> {
    return res.json(instrutores);
}

const obterInstrutor = (req, res)=> {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id === Number(id);
    })

    if(!instrutor){
        return res.status(404).json({ mensagem: 'Instrutor nao Encontrado' });
    }

    return res.json(instrutor)
};

const cadastrarInstrutor = (req, res) =>{
  const {nome, email, status} = req.body;

  if(!nome){
    return res.status(400).json({mensagem: 'O nome e obrigatorio'})
  }
  if(!email){
    return res.status(400).json({mensagem: 'O email e obrigatorio'})
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome,
    email,
    status: status || true
  }
  instrutores.push(instrutor);
    return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res)=> {
    const { id } = req.params;
    const {nome, email, status} = req.body;

    if(!nome){
      return res.status(400).json({mensagem: 'O nome e obrigatorio'})
    }
    if(!email){
      return res.status(400).json({mensagem: 'O email e obrigatorio'})
    }

    const instrutor = instrutores.find((instrutor) =>{
        return instrutor.id === Number(id);
    });

    if(!instrutor){
        return res.status(404).json({ mensagem: 'Instrutor nao Encontrado' });
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(203).send();
}

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor
}
