console.log("Boas-vindas ao jogo de Blackjack!")

let confirm = true

while(confirm){

    let cartasUsuario = []
    let cartasComputador = []

   const confirm = window.confirm("Quer iniciar uma nova rodada?")
   // Se o usuário optar por cancelar, sai do loop e encerra o jogo:
   if(confirm === false){
      break
   }

   // Caso queira continuar:

   // SORTEIO DAS CARTAS 
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   // ACRESCENTANDO AS CARTAS AOS ARRAYS
   cartasUsuario.push(cartaUsuario1,cartaUsuario2)
   cartasComputador.push(cartaComputador1,cartaComputador2)
   
   // CONDIÇÃO DOS ASES
   const condicaoAses = (cartasUsuario[0,1].valor === 11 || cartasComputador[0,1].valor === 11) // se um dos dois tirar dois Ases

   if(condicaoAses){
       console.log("Dois Ases sorteados. Temos que sortear novamente!")

       cartasUsuario.splice(0,2)
       cartasComputador.splice(0,2)

       continue
   }

    // SOMA DOS VALORES DAS CARTAS DE CADA ARRAY
    let valorTotalUsuario = 0
    let valorTotalComputador = 0

    for(carta of cartasUsuario){
        valorTotalUsuario += carta.valor
    }

    for(carta of cartasComputador){
        valorTotalComputador += carta.valor
    }

    // Criando uma variável de texto e um loop for para poder automaticamente imprimir todos os textos das cartas independente do número de elementos do array.  -- (Só serviu para os dois valores iniciais, mas vou deixar aqui)

   let textoUsuario = " "
   let textoComputador = " "

   for(carta of cartasUsuario){
        textoUsuario += carta.texto + " "
   }
   console.log(textoUsuario) // testando

   for(carta of cartasComputador){
       textoComputador += carta.texto + " "
   }
   console.log(textoComputador) // testando
   

   // PERGUNTANDO SE QUER COMPRAR MAIS UMA CARTA

   let maisUmaCartaUsuario = true
   
   while(maisUmaCartaUsuario) {

    maisUmaCartaUsuario = window.confirm(`Suas cartas são ${textoUsuario}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)

    if(maisUmaCartaUsuario === false) {

        // SE O JOGADOR PARAR DE COMPRAR CARTAS E AINDA TIVER MENOS DE 21 PONTOS (saiu do loop) -> É A VEZ DO COMPUTADOR

        // O computador deverá comprar cartas até que sua pontuação seja igual ou superior a do usuário:

        while(valorTotalComputador < valorTotalUsuario) {

            // COMPUTADOR COMPRANDO MAIS UMA CARTA
            let outraCartaComputador = comprarCarta()
            cartasComputador.push(outraCartaComputador)
    
            // ACRESCENTANDO O TEXTO DAS NOVAS CARTAS DO COMPUTADOR AO WINDOW.CONFIRM
            textoComputador += outraCartaComputador.texto
            // SOMANDO O VALOR DA NOVA CARTA COMPRADA
            valorTotalComputador += outraCartaComputador.valor
    
        } // fim do while
    
        if(valorTotalComputador > valorTotalUsuario && valorTotalComputador < 21){
    
            let mensagem2 = window.alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorTotalUsuario}. \n As cartas do computador são ${textoComputador}. A pontuação do computador é ${valorTotalComputador}. \n ${`O computador ganhou!`}`)
            break 
        }
        else if(valorTotalComputador > 21){
            let mensagem3 = window.alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorTotalUsuario}. \n As cartas do computador são ${textoComputador}. A pontuação do computador é ${valorTotalComputador}. \n ${`Você ganhou o jogo!`}`)
            break
        }
        else if(valorTotalComputador === valorTotalUsuario){
            let mensagem4 = window.alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorTotalUsuario}. \n As cartas do computador são ${textoComputador}. A pontuação do computador é ${valorTotalComputador}. \n ${`Deu empate!`}`)
             break
        }
        break
    }

    // USUÁRIO COMPRANDO MAIS UMA CARTA
    let outraCartaUsuario = comprarCarta()
    cartasUsuario.push(outraCartaUsuario)

    // ACRESCENTANDO O TEXTO DAS NOVAS CARTAS DO USUÁRIO AO WINDOW.CONFIRM
    textoUsuario += outraCartaUsuario.texto 
    // SOMANDO O VALOR DA NOVA CARTA COMPRADA
    valorTotalUsuario += outraCartaUsuario.valor

    if(valorTotalUsuario > 21){
        let mensagem5 = window.alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorTotalUsuario}. \n As cartas do computador são ${textoComputador}. A pontuação do computador é ${valorTotalComputador}. \n ${`O computador ganhou!`}`) 

        confirm === false
        break
    }
    else if(valorTotalUsuario === 21){
        let mensagem6 = window.alert(`Suas cartas são ${textoUsuario}. Sua pontuação é ${valorTotalUsuario}. \n As cartas do computador são ${textoComputador}. A pontuação do computador é ${valorTotalComputador}. \n ${`Você ganhou!`}`) 
        break
    }

   } // fim do while de mais uma carta ao usuário

} // fim do while global


console.log("O jogo acabou!")