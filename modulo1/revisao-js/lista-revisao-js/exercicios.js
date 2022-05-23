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

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}