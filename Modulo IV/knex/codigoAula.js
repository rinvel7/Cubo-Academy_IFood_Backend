//const agenda = await knex('agenda')Lista os registros 
//const agenda = await knex('agenda').debug();  permite ver na consola a descricao do knex que vai generando
    //const agenda = await knex.row('select * from agenda'); outro jeito de escrever knex
    //const agenda = await knex('agenda').where('id', 5).debug(); where ele filtra os resultado em base a uma condicao
     //const agenda = await knex('agenda').where('id',!=, 5).debug(); where ele filtra os resultado eceptuando a condicao
    //const agenda = await knex('agenda').where({id: 5}).first().debug(); were ele filtra os resultado e retornar o primeiro registro encontrado
    //const agenda = await knex('agenda').where({id: 5}).select('id', 'nome').first().debug(); //were ele filtra os resultado e retornar o primeiro registro encontrado com os parametros fornecidos
    //const agenda = await knex('agenda').whereNull('email')where filtra todos os registros email nulos
    //const agenda = await knex('agenda').whereNotNull('email')where filtra todos os registros email que nao estao nulos
    //const agenda = await knex('agenda').whereBetween('id', [5,10])where filtra todos os registros  desde - ate em orden ascendente
    //const agenda = await knex('agenda').whereBetween('id', [5,10]).orderBy('id', 'desc') where filtra todos os registros  desde - ate em orden descendente
    //const agenda = await knex('agenda').distinct('email') retornar apenas valores únicos de uma determinada coluna ou combinação
   // const agenda = await knex('agenda').select('email').groupBy('email')agrupar os registros de uma tabela
   //const agenda = await knex('agenda').select('email').groupBy('email').count()agrupar os registros de uma tabela e o total de vezes que ele e repetido
   //const agenda = await knex('agenda').limit(5).offset(2) limitar o número de resultados retornados
   //const agenda = await knex('agenda').whereNull('email').count()  contar a quantidade de registros que atendem a uma determinada condição
   //const agenda = await knex('agenda').whereNull('email').sum('id') soma total de valores
   //const agenda = await knex('agenda').whereNull('email').avg('id') obter a média de valores
   //const agenda = await knex('agenda').whereNull('email').min('id')  dentificar o valor mínimo
   //const agenda = await knex('agenda').whereNull('email').max('id') identificar o valor máximo