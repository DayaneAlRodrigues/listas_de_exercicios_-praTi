SQL
SELECT
    C.codigo,
    C.data,
    C.mesa,
    C.nome_cliente,
    SUM(IC.quantidade * CA.preco_unitario) AS valor_total_comanda
FROM
    Comanda C
JOIN
    ItemComanda IC ON C.codigo = IC.codigo_comanda
JOIN
    Cardapio CA ON IC.nome_cafe = CA.nome_cafe
GROUP BY
    C.codigo,
    C.data,
    C.mesa,
    C.nome_cliente 
ORDER BY
    C.data,
    C.codigo;
