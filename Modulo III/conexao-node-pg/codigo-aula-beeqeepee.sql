--create database aula_conexao_node_pg;
--create table empresas (...)
--create table filiais (...)
--create table pessoas (...)

--criar servidor (instalar dependencias e bibliotecas)
--      -npm install -D nodemon
--      -npm install express pg (pode-se instalar as dois na vez)


--AGRUPANDO TABELAS COM JOIN
--select e.id as empresasId, f.id as filialId, e.nome, f.pais, p.nome as funcionario
--from empresas e
--join filiais f on e.id = f.empresa_id
--join pessoas p on e.id = p.empresa_id;

--AGRUPANDO TABELAS COM JOIN - LEFT
--select e.id as empresasId, f.id as filialId, e.nome, f.pais from empresas e left join filiais f on e.id = f.empresa_id

--AGRUPANDO TABELAS COM JOIN - RIGHT
--select e.id as empresasId, f.id as filialId, e.nome, f.pais from empresas e right join filiais f on e.id = f.empresa_id


--FULL JOIN
--select e.id as empresasId, f.id as filialId, e.nome, f.pais 
--from empresas e 
--full join filiais f on e.id = f.empresa_id


--PAGINACAO
--select * from pessoas order by id asc limit 10 offset 0;


