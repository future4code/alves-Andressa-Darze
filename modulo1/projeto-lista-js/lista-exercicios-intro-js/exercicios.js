// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Insira a altura do retângulo:")
  const largura = +prompt("Insira a largura do retângulo:")
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Qual o ano atual?")
  const anoNasc = +prompt("Qual o seu ano de nascimento?")
  const idade = anoAtual - anoNasc
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / altura**2
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Insira seu nome:")
  const idade = +prompt("Insira sua idade:")
  const email = prompt("Insira seu e-mail:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Insira sua primeira cor favorita:")
  const cor2 = prompt("Insira sua segunda cor favorita:")
  const cor3 = prompt("Insira sua terceira cor favorita:")
  const arrayCores = [cor1, cor2, cor3]
  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const minIngressos = custo / valorIngresso
  return minIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const check = (string1.length === string2.length)
  return check

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ghost = array[0]
  array[0] = array[array.length -1]
  array[array.length - 1] = ghost

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const check = (string1.toLowerCase() === string2.toLowerCase())

  return check

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("Insira o ano atual:")
  const anoDeNascimento = +prompt("Insira seu ano de nascimento:")
  const anoIdentidade = +prompt("Insira o ano de emissão da sua carteira de identidade:")

  const idade = anoAtual - anoDeNascimento
  const tempoI = anoAtual - anoIdentidade

  const x = (idade <= 20 && tempoI >= 5)
  const y = ((idade>20 && idade<=50) && tempoI >= 10)
  const z = (idade > 50 && tempoI >= 15)

  const resultado = (x || y || z)

  console.log(resultado)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const x = (ano%400==0)
  const y = (ano%4==0)
  const z = ((ano%100==0) && (ano%400==0))

  const bissexto = ( x || (y || z) )

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}