/*
// deposite
const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click', function(){
    // input value
    const depositeInputValue = document.getElementById('deposite-input');
    const depositeInputText = depositeInputValue.value;
    const depositeInput = parseFloat(depositeInputText);
    
    // add value
    const depositeAmoutValue = document.getElementById('deposite-amount');
    const depositeAmountText = depositeAmoutValue.innerText;
    const depositeAmount = parseFloat(depositeAmountText);
    depositeAmoutValue.innerText = depositeAmount + depositeInput;

    // total balance
    const depositeTotalBalance = document.getElementById('total-balance');
    const depositeTotalText = depositeTotalBalance.innerText;
    const depositeTotal = parseFloat(depositeTotalText);
    depositeTotalBalance.innerText = depositeTotal + depositeInput;

    // clear input
    depositeInputValue.value = '';
})

// withdrow
const withdrowButton = document.getElementById('withdrow-button');
withdrowButton.addEventListener('click', function(){
    // input value
    const withdrowInputValue = document.getElementById('withdrow-input');
    const withdrowInputText = withdrowInputValue.value;
    const withdrowInput = parseFloat(withdrowInputText);
    
    // add value
    const withdrowAmoutValue = document.getElementById('withdrow-amount');
    const withdrowAmountText = withdrowAmoutValue.innerText;
    const withdrowAmount = parseFloat(withdrowAmountText);
    withdrowAmoutValue.innerText = withdrowAmount + withdrowInput;

    // total balance
    const withdrowTotalBalance = document.getElementById('total-balance');
    const withdrowTotalText = withdrowTotalBalance.innerText;
    const withdrowTotal = parseFloat(withdrowTotalText);
    withdrowTotalBalance.innerText = withdrowTotal - withdrowInput;

    // clear input
    withdrowInputValue.value = '';
})
*/

function inputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputText = inputValue.value;
    const userInputValue = parseFloat(inputText);
    // clear input
    inputValue.value = '';
    return userInputValue;
}
function totalAmount(amountId,userInputValue){
    const amoutValue = document.getElementById(amountId);
    const amountText = amoutValue.innerText;
    const amount = parseFloat(amountText);
    amoutValue.innerText = amount + userInputValue;
}
function totalBalance(balanceId,userInputValue,condition){
    const totalBalance = document.getElementById('total-balance');
    const totalText = totalBalance.innerText;
    const total = parseFloat(totalText);
    
    if(condition == true){
        totalBalance.innerText = total + userInputValue;
    }
    else{
        totalBalance.innerText = total - userInputValue;
    }
}
// deposite
const depositeButton = document.getElementById('deposite-button');
depositeButton.addEventListener('click', function(){
    // input value
    const userInputValue = inputValue('deposite-input');
    if(userInputValue > 0){
    // add value
   const userTotalAmount = totalAmount('deposite-amount',userInputValue);

   // total balance
   const userTotalBalance = totalBalance('total-balance',userInputValue,true);
    }
})

// withdrow
const withdrowButton = document.getElementById('withdrow-button');
withdrowButton.addEventListener('click', function(){
    // input value
    const userInputValue = inputValue('withdrow-input');
    if(userInputValue > 0){
    // add value
    const userTotalAmount = totalAmount('withdrow-amount',userInputValue);

    // total balance
    const userTotalBalance = totalBalance('total-balance',userInputValue,false); 
    } 
})