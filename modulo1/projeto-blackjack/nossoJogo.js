// PROJETO DE FIXAÇÃO: BLACKJACK


console.log("Boas-vindas ao jogo de Blackjack!")

let confirm = true


while(confirm){

   confirm = window.confirm("Quer iniciar uma nova rodada?")
   if(confirm === false){
      break
   }
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   
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



 







