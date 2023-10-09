--select * from musicas;

--select id, ritmo, grupo from musicas;

--select distinct compositor, composicao from musicas;

--select * from musicas where tempo > 200;

--select * from musicas where tempo > 200 AND tempo < 400;

--select * from musicas where tempo between 200 AND 400;

--select * from musicas where compositor = 'Schubert' OR compositor = 'Bach';

--select * from musicas where compositor is null;

--select * from musicas where compositor is not null;

--select * from musicas limit 3;

--select * from musicas offset 3;

--select * from musicas limit 10 offset 0;--pag 1

--select * from musicas limit 10 offset 10;--pag 2

--select * from musicas limit 10 offset 20;--pag 3

--select * from musicas where compositor = 'Schubert' order by id desc;

--select * from musicas where compositor = 'Schubert' order by id desc limit 5 offset 5;

--select * from musicas where composicao like 'Violin Sonata No 1 in G minor';

--select * from musicas where composicao like '%in G minor';

--select * from musicas where composicao like 'Violin Sonata%';

--select * from musicas where composicao like '%Sonata%';

--select * from musicas where composicao like '_iano Sonata in A major';

--select * from musicas where composicao like '__ano Sonata in A maj__';

--select * from musicas where composicao ilike 'piano sonata in a major';

--select * from musicas where composicao ilike '%sonata in a majo_';
