function CriaCartao(categoria, pergunta, resposta)
let container = document.getElementByld('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'

cartao.innerHTML = `
<div class="cartao_conteudo">
<h3>${categotia}</h3>
<div class="cartao_conteudo_pergunta">