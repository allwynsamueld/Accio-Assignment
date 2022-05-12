function calculateInterest() {
    let inputBalanceNodes = document.getElementsByClassName("input-balance");
    let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");
  
    let bankBalances = []
  
    for (let i = 0; i < inputBalanceNodes.length; i++) {
      bankBalances[i] = Number(inputBalanceNodes[i].value);
      if(bankBalances[i] > 200000){
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
      } else if (bankBalances[i] > 100000 ) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
      } else {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
      }
      displayUpdatedBalances[i].value = bankBalances[i]
    }
  }
  

  
  function calculateInterest() {
    let inputBalanceNodes = document.getElementsByClassName("input-balance");
    let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");
  
    let temp
  
    for (let i = 0; i < inputBalanceNodes.length; i++) {
      temp = Number(inputBalanceNodes[i].value);
      if(temp > 200000){
        temp = temp + temp * 0.1
        temp = temp - temp * 0.002
      } else if (temp > 100000 ) {
        temp = temp + temp * 0.05
        temp = temp - temp * 0.0005
      } else {
        temp = temp + temp * 0.03
      }
      displayUpdatedBalances[i].value = temp
    }
  }