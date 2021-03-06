// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let newArray = []
  for(j=0; j < array.length; j++) {
      newArray[j] = array[array.length - (j + 1)]
  }
  return newArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let troca
  let newArray = array
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
        if(newArray[i] > newArray[j]) {
             troca = newArray[i]
                newArray[i] = newArray[j]
                newArray[j] = troca
        }
    }
  }
    return newArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let arrayPares = []
  for(num of array) {
      if(num % 2 === 0) {
          arrayPares.push(num)
      }
  }
  return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let newArray = []
 for(num of array) {
     if(num % 2 === 0) {
         newArray.push(num**2)
     }
 }
 return newArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity
  for(i=0; i < array.length; i++) {
      if(array[i] > maior) {
          maior = array[i]
      }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto
    if(num1 >= num2) {
        objeto = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: (num1%num2===0),
            diferenca: num1 - num2
        }
    }
    else if(num2 > num1) {
        objeto = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: (num2%num1===0),
            diferenca: num2 - num1
        }
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let arrayPrimeirosPares = []
   let par = 0
   for(i=0; i<n; i++){
    arrayPrimeirosPares.push(par)
    par += 2
    }
    return arrayPrimeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA===ladoB && ladoA===ladoC){
        return "Equilátero"
    }
    else if(ladoA!==ladoB && ladoA!==ladoC && ladoB!==ladoC) {
        return "Escaleno"
    }
    else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayFinal = []
    let troca
    let newArray = array
    for(let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++) {
          if(newArray[i] > newArray[j]) {
               troca = newArray[i]
                  newArray[i] = newArray[j]
                  newArray[j] = troca
          }
      }
    }
    arrayFinal = [newArray[newArray.length - 2], newArray[1]]
    return arrayFinal

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayA = []

    for(pessoa of pessoas) {

        let x = (pessoa.altura >= 1.5)
        let y = (pessoa.idade > 14 && pessoa.idade < 60)

        if(x && y){
            arrayA.push(pessoa)
        }
    }

    return arrayA
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayB = []

    for(pessoa of pessoas) {

        let x = (pessoa.altura >= 1.5)
        let y = (pessoa.idade > 14 && pessoa.idade < 60)

        if(!x || !y){
            arrayB.push(pessoa)
        }
    }

    return arrayB
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(i=0; i < contas.length; i++) {

        let totalDespesas = 0

        for(j=0; j < contas[i].compras.length; j++) {
            totalDespesas += contas[i].compras[j]
        }
        contas[i].saldoTotal = contas[i].saldoTotal - totalDespesas // atualizando o saldo total

        contas[i].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b) {
        if (a.nome > b.nome) {
            return 1
        }
        if (a.nome < b.nome) {
            return -1
        }
        return 0
    })
    
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   consultas.sort(function(a,b) {
       return a.
   })
}