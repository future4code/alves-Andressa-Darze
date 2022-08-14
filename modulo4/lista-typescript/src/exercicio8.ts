function checaRenovacaoRG(anoNasc:string, anoEmis:string): boolean | string {
    const now = new Date()
    const anoAtual = now.getFullYear()
    const anoNascimento = Number(anoNasc.split("/")[2])
    const anoEmissao = Number(anoEmis.split("/")[2])

    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? true : false
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? true : false
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? true : false
       
    }
    else {
           return "error"
       }
}

   console.log(checaRenovacaoRG("26/04/1997", "23/02/2007"))

   