SQL
SELECT
    C.codigo              AS codigo_comanda,
    C.data                AS data_comanda,
    C.mesa,
    C.nome_cliente,
    IC.nome_cafe,
    CA.descricao,
    IC.quantidade,
    CA.preco_unitario,
    (IC.quantidade * CA.preco_unitario) AS preco_total_cafe
FROM
    Comanda C
JOIN
    ItemComanda IC ON C.codigo = IC.codigo_comanda
JOIN
    Cardapio CA ON IC.nome_cafe = CA.nome_cafe
ORDER BY
    C.data,
    C.codigo,
    IC.nome_cafe;
