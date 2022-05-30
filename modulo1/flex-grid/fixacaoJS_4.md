```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let resultado
  if(arrayDeNumeros.includes(numeroEscolhido)) {
    let soma = 0
    for(num of arrayDeNumeros){
      if(num === numeroEscolhido){
        soma += 1
      }
    }
    resultado = `O número ${numeroEscolhido} aparece ${soma}x`
  }
  else {
    resultado = "Número não encontrado"
  }
  return resultado
} 
```