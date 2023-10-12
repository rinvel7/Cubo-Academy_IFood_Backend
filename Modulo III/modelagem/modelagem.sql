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

--4. Definir entidades tabela de relacionamento:
--(um para muitos)
--          *LIVROS
--               isbn            integer
--               editora_id      integer
--               titulo          text
--               data_publicacao date

--5. Criar tabela
--          create table livros (
--              isbn integer primary key,
--              editora_id integer references editoras(id),
--              titulo text not null,
--              data_publicacao date not null
--          );

