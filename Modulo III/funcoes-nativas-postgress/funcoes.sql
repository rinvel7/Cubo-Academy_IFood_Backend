--COUNT: ele retorna o nuemero de registros, segundo a condicao.
--select count(*) from usuarios where idade >= 18;


--CRIANDO ALIAS OU RENOMEANDO COLUMNAS
--Retrona so os nomes renomenado a columna
--select nome as nomeCompleto from usuarios where idade >= 18;

--Retorna todos os registros e ao final adiciona a columna renomeada
--select *, nome as "nome Completo" from usuarios where idade >= 18;

--Retorna so u numero, com o nome da columna trocada
--select count(*) as quantidadeUsuarios from usuarios where idade >= 18;


--CONCACT: concatena varios registros, dadas as condicoes, em uma so columna
--select concat(nome, ' ', email, ' ', idade) as nome_email_idade from usuarios; 


--AVG: calcula a media - ROUND: arrendonda a quantidade
--Calculo da media
--select avg(idade) from usuarios;

-- Case com decimal
--select round(avg(idade), 2) from usuarios; 

-- Case redondeado numero enteiro
--select round(avg(idade)) from usuarios; 


--MIN - MAX
--MIN: Retorna o menor valor de um campo.
--Retorno de numero
--select min(idade) from usuarios; 

--Retorno de texto
--select min(nome) from usuarios;

--Retorno de datas
--select min(cadastro) from usuarios;

--MAX: retorna o valor maior de um campo
--Retorno de numero
--select max(idade) from usuarios; 

--Retorno de texto
--select max(nome) from usuarios;

--Retorno de datas
--select max(cadastro) from usuarios;


--SUM: soma um campo numerico
--select sum(idade) from usuario



--CAST: converte um tipo de dado de um campo.
--Converter NUMEROS em Texto
--select idade::text from usuario

--Converte STRING no INTEIRO
--select '123'::integer;

--Soma numeros
--slect '123' + 4

--CONVERTIENDO COM FUNCAO NATIVA DE POSTGRESS
--select cast(idade as text) from usuarios;

--NOW: genera uma data, ao moemnto atual que a quety e executada
--Retorno de date que ainda nao acontecen
--select * from argumentos where cast(agendamento as date) > now();

--Retorno de dia e hora que ainda nao acontecen
--select * from argumentos where cast(agendamento as timestamp) > now();

----Retorno data sem hora
--select cast(agendamento as date) * from argumento;

----Retorno data sem date
--select cast(agendamento as time) * from argumento;

----Retorno data com date e hora
--select cast(agendamento as date) * from argumento;


---AGE: compara datas
--select age('2022-03-26 12:00:00:00', '2021-12-2016 11:00:00');

--select age(cast('2021-03-16 12:00:00' as timestamp))
