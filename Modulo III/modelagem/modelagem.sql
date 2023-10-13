--1. Criar um Banco de Dados:
--create database aula_modelagem


--2. Definir ENTIDADES para uma tabela:
--          *EDITORAS:
--              --id    serial
--              --nome  text
--              --cnpj  text
--              --data_cadastro timestamp


--3. Criar ENTIDADES na tabela:
--          create table editoras (
--              id serial primary key,
--              nome text not null,
--              cnpj text unique,
--              data_cadastro timestamp default now()
--          );

--4. Criar registro:
--      insert into editoras (nome, cpnj) values ('Cubos Academy', '00112233445567');
--      (id e data sao omitido porque eles sao auto generados)
  
-- RELACIONAMENTO UM PARA MUITOS  
--5. Definir entidades tabela de relacionamento:
--          *LIVROS
--               isbn            integer
--               editora_id      integer
--               titulo          text
--               data_publicacao date

--6. Criar tabela de relacionamento:
--          create table livros (
--              isbn integer primary key,
--              editora_id integer references editoras(id),
--              titulo text not null,
--              data_publicacao date not null
--          );

--7. Criar registro:
--      insert into livros 
--      (isbn, editora_id, titulo, data_publicacao) 
--      values
--      (12345, 1, 'Backend com Node.js', '2021-12-01');


--insert into livros 
--(isbn, editora_id, titulo, data_publicacao) 
--values
--(12346, 1, 'Node.js Avancado', '2022-01-01');


-- RELACIONAMENTO UM PARA UN
--8. Definir entidades tabela de relacionamento:
--          *ENDERECOS
--               id         serial 
--               editora_id integer 
--               cep        text 
--               rua        text
--               bairro     text
--               cidade     text
--               estado     text
--               pais       text

--Criar uma tabela de relacionamento:
--create table enderecos (
--id serial primary key,
--editora_id integer references editoras(id),
--cep text not null,
--rua text,
--bairro text,
--cidade, text,
--estado char (2),
--pais text
--);

--Criar um regirstro:
--insert into enderecos (editora_id, cep) values (1, '41000-000')


--RELACIONAMINETO MUITOS PARA MUITOS
-- DEfinir as entidades:

--Criar tabela de ligacao:
--create table categorias (
-- 	id serial primary key,
--  nome text not null
-- );


--Criar tabelaauxiliar:
--create table livro_categoria (
--livro_isbn integer references livros(isbn),
--categoria_id integer references categorias(id)
--);

--RELACIONAMENTO 
--insert into livro_categoria
--(livro_isbn, categoria_id) 
--values
--(12345, 1),
--(12345, 2),
--(12345, 3),
--(12346, 1);


--AUTO RELACIONAMENTO
--Criar a tabela:
--create table comentarios (
--	id serial primary key,
--  descricao text not null,
--  comentario_id integer references comentarios(id),
--  livros_isbn integer references livros(isbn)
--);


--criar registro:
--insert into comentarios (livros_isbn, descricao) values (12345, 'Que bom livro');


--ALTERACAO DE TABELAS
--Adicionar uma coluna:
--alter table categorias add column descricao text;

--Deletar uma coluna:
--alter table categorias drop column descricao;