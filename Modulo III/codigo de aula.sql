--SELECT: RETORNA TUDOS OS REGISTROS
--select * from musicas;

--SELECT CAMPOS ESPECIFICOS: RETORNA SO OS CAMPOS SEGUNDO O ORDEM EXPRESADO
--select id, ritmo, grupo from musicas;


--DISTINCY: RETORNA REGISTROS UNICOS, NESTE CASO, ELE RETORNA A CONDICAO , ONDE NAO SE PODE REPETIR
--select distinct compositor from musicas;

--DISTINCY: RETORNA REGISTROS UNICOS, NESTE CASO, ELE RETORNA AS DOIS CONDICOES, ONDE SE PODE REPETIR
--select distinct compositor, composicao from musicas;


--WHERE: FILTRA OS REGISTROS
--select * from musicas where tempo > 200;

--select * from musicas where tempo > 200 AND tempo < 400;

--BETWEEN: COMPARA OU VERIFICA OS REGISTOS ENTRE UM VALOR E OUTRO
--select * from musicas where tempo between 200 AND 400;

--select * from musicas where compositor = 'Schubert' OR compositor = 'Bach';

--IS NULL: RETORNA CAMPOS QUE NAO POSOUI VALOR
--select * from musicas where compositor is null;

--IS NOT NULL: RETORNA CAMPOS QUE POSOUI ALGUM VALOR
--select * from musicas where compositor is not null;


--LIMIT: LIMITA A QUANTIDADE DE RESULTADOS, PARTIENDO DO PRIMEIRO REGISTROS DE ACORDO COM A ORDENACAO.
--select * from musicas limit 3;


--OFFSET: IGNORA OS RESULTADOS, DEACORDO COM A QUANTIDADE INFORMADA, PARTIENDO DOS PRIMEIROS REGISTROS.
--select * from musicas offset 3;

--select * from musicas limit 10 offset 0;--pag 1

--select * from musicas limit 10 offset 10;--pag 2

--select * from musicas limit 10 offset 20;--pag 3


--ORDER BY: ORDENA UM O MAIS CAMPOS DE FORMA ASCENDENTE  OU DESCENDENTE. POR PADRAO ELE RETORNA ASCENDENTE
--select * from musicas where compositor = 'Schubert' order by id desc;

--select * from musicas where compositor = 'Schubert' order by id desc limit 5 offset 5;


--LIKE: COMPARA UM VALOR NUMA CLAUSULA WHERE E PERMITE USAR CORINGA PARA COMPARAR PARTES DE UMA CORRESPONDENCIA.
--RETORNA TUDO SEGUN A CONDICAO DADA.
--select * from musicas where composicao like 'Violin Sonata No 1 in G minor';

--RETORNA QUANTIDADE DE REGISTROS QUE TERMINAN COM AQUELE CONJUNTO DE CARACTERES DEPOIS DO CORGINGA %
--select * from musicas where composicao like '%in G minor';

--RETORNA QUANTIDADE DE REGISTROS QUE COMENCA COM AQUELE CONJUNTO DE CARACTERES ANTES DO CORGINGA %
--select * from musicas where composicao like 'Violin Sonata%';

--RETORNA QUANTIDADE DE REGISTROS COM AQUELE CONJUNTO DE CARACTERES QUE SE ENCONTRA EM MEIO DO CORGINGA %
--select * from musicas where composicao like '%Sonata%';

--CORINGA _ REPRESENTA UN CARACTER 
--select * from musicas where composicao like '_iano Sonata in A major';

--select * from musicas where composicao like '__ano Sonata in A maj__';


--ILIKE: ELE RETORNA OS REGISTROS SEM FAZER DIFERENCIA DE CARACTERES, SEJA MINISCULAS OU MAIUSCULAS
--select * from musicas where composicao ilike 'piano sonata in a major';

--select * from musicas where composicao ilike '%sonata in a majo_';
