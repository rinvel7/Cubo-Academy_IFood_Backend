const bd = {
    identificadorInstrutor: 3,
    identificadorAula: 2,
    instrutores: [
        {id: 1, nome:'Guido', email: 'guido@mail.com', status: true},
        {id: 2, nome:'Danu', email: 'dani@mail.com', status: true},
    ],
    aulas:[
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
       }
    ]
}

module.exports = bd;