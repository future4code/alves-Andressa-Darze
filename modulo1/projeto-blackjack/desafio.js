
console.log("Boas-vindas ao jogo de Blackjack!")

let confirm = true

let cartasUsuario = []
let cartasComputador = []

let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()

let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()

let condicaoAses = (cartaUsuario1.valor === 11 && cartaUsuario2 && 11) || (cartaComputador1.valor === 11 && cartaComputador2.valor === 11) // se um dos dois tirar dois Ases

if(!condicaoAses) {
   cartasUsuario.push(cartaUsuario1,cartaUsuario2)

}

while(confirm){

   confirm = window.confirm("Quer iniciar uma nova rodada?")
   cartaUsuario1 = comprarCarta()
   cartaUsuario2 = comprarCarta()

   cartasUsuario.push(cartaUsuario1,cartaUsuario2)
   console.log(cartasUsuario) // só pra conferir
   
   cartaComputador1 = comprarCarta()
   cartaComputador2 = comprarCarta()

   

   cartasComputador.push(cartaComputador1, cartaComputador2)
   console.log(cartasComputador) // só pra conferir
   
   let valorTotalUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let valorTotalComputador = cartaComputador1.valor + cartaComputador2.valor
   
   console.log( `
   Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Pontuação:  ${valorTotalUsuario}
   Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação: ${valorTotalComputador}
   `)
   
   if(valorTotalUsuario === valorTotalComputador){
      console.log("Empate!")
   }
   else if(valorTotalUsuario > valorTotalComputador){
      console.log("O usuário ganhou!")
   }
   else{
      console.log("O computador ganhou!")
   }
   
}

console.log("O jogo acabou!")


