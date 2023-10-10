--Monte uma query que retorne a quantidade de produtos agrupados por
--categoria e soma dos estoque de todos os produtos de cada categoria

--quantidade de produtos agrupados por categoria:
--select categoria, count(id) from farmacia group by categoria;


--soma dos estoque de todos os produtos de cada categoria
--select categoria,  sum(estoque) from farmacia group by categoria

--select categoria, count(id) as "quantidadeProdutos", sum(estoque) as "somaTotalEstoque" from farmacia group by categoria