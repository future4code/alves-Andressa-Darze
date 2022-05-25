```
function calculaPrecoTotal(quantidade) {
  let custoTotal
  if(quantidade < 12){
    custoTotal = quantidade * 1.3
  }
  else{
    custoTotal = quantidade
  }
  return custoTotal
} 
```