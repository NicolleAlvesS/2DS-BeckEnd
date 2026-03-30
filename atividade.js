const produtos = ["Arroz", "Feijão", "Café", "Óleo de Soja", "Açúcar", "Leite", "Ovos", "Pão de forma", "Sabão em Pó", "Manteiga"]
const precos = [   29.90 ,   8.50 ,   18.90 ,     6.29 ,       4.95 ,   4.49 ,   10.80 ,    8.99 ,         14.90 ,        10.50    ]

function mostrarEstoque(){
 console.log("=== Estoque ===")
    let contador = 0 
  while(contador < produtos.length){ 
   console.log(produtos[contador] + " - " + precos[contador])
   contador = contador + 1
}
}

mostrarEstoque()

function adicionarEstoque(nome, preco){
    produtos.push(nome)
    precos.push(preco)
    console.log("== Produto adicionado ==")
}
adicionarEstoque("Creme dental", 6)
mostrarEstoque()

function removerProduto(indice){
   produtos.splice(indice, 1) 
   precos.splice(indice, 1) 
}

removerProduto()
mostrarEstoque()