
document.getElementById('btn-donate-1').addEventListener('click', function(event){
event.preventDefault();
// console.log('btn-donate-1')

const inputNumber = document.getElementById('input-number').value;
const numberParseFloar = parseFloat(inputNumber)
// console.log(numberParseFloar);
const balanceInput1 = document.getElementById('balance-1').innerText;
const balanceParseFloar = parseFloat(balanceInput1);
// console.log(balanceParseFloar)

const sumTotal = balanceParseFloar + numberParseFloar;
// console.log(sumTotal);

document.getElementById('balance-1').innerText=sumTotal;
document.getElementById('balanceParseFloar').innerText=newBalance;

})
// document.getElementById('balanceParseFloar').innerText=newBalance;


// second card


document.getElementById('btn-donate-2').addEventListener('click', function(event){
    event.preventDefault();
    console.log('btn-donate-2')
    
    const inputNumber2 = document.getElementById('input-number-2').value;
    const numberParseFloar = parseFloat(inputNumber2)
    console.log(numberParseFloar);
    const balanceInput2 = document.getElementById('balance-2').innerText;
    const balanceParseFloar = parseFloat(balanceInput2);
    console.log(balanceParseFloar)
    
    const sumTotal = balanceParseFloar + numberParseFloar;
    console.log(sumTotal);
    
    document.getElementById('balance-2').innerText=sumTotal;
    document.getElementById('balanceParseFloar').innerText=newBalance;
    
    })
    // document.getElementById('balanceParseFloar').innerText=newBalance;
    

    // thirt card

    document.getElementById('btn-donate-3').addEventListener('click', function(event){
        event.preventDefault();
        console.log('btn-donate-3')
        
        const inputNumber3 = document.getElementById('input-number-3').value;
        const numberParseFloar = parseFloat(inputNumber3)
        console.log(numberParseFloar);
        const balanceInput3 = document.getElementById('balance-3').innerText;
        const balanceParseFloar = parseFloat(balanceInput3);
        console.log(balanceParseFloar)
        
        const sumTotal = balanceParseFloar + numberParseFloar;
        console.log(sumTotal);
        
        document.getElementById('balance-3').innerText=sumTotal;
        document.getElementById('balanceParseFloar').innerText=newBalance;
       

        })
        
        // document.getElementById('balanceParseFloar').innerText=newBalance;
        
    



// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();
   
//     const addMoneyInput = document.getElementById('input-add-money').value;
//     const addMoneyPin = document.getElementById('input-add-pin').value;
//     console.log(addMoneyInput, addMoneyPin);
  
//     // pin verify
  
//     if(addMoneyPin === '1234'){
//       console.log('money is add your account')
  
//       const balance = document.getElementById('total-balance').innerText;
//       console.log(balance)
  
//       const addMoneyParseFloat = parseFloat(addMoneyInput);
//       const addBalanceParseFloat =parseFloat(balance);
//       const newTotalMoney = addMoneyParseFloat + addBalanceParseFloat;
//       console.log(newTotalMoney)
  
//       // update total
//       document.getElementById('total-balance').innerText=newTotalMoney;
//       }
//     else{
//       alert('failed to your add money! Please try to again');
//     }
//   })
  
//   // //  6 account update
//   document.getElementById('balance').innerText=newBalance;
  