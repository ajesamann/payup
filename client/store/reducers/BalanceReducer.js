export const balanceReducer = (state = '0', action) => {
    switch (action.type) {
        case 'ADD_TO_BALANCE':
            //return this
            let balance;
            
            //old balance
            let int1 = parseFloat(state.replace(/,/g, ''));

            //deposit amount to add
            let int2 = parseFloat(action.payload.replace(/,/g, ''));

            //formate the balance and turn it into a string
            let newBalance = (int1 + int2).toFixed(2).toString();

            //if there's no decimal return the balance
            balance = newBalance;

            //if there is a decimal, check the number length and add commas accordingly
            if(newBalance.indexOf('.') != -1){
                let newBalanceDecimal = newBalance.slice(newBalance.indexOf('.'), newBalance.length);
                let newBalanceNoDecimal = newBalance.slice(0, newBalance.indexOf('.'));

                if(newBalanceNoDecimal.length == 4){
                    newBalanceNoDecimal = newBalanceNoDecimal.split('');
                    newBalanceNoDecimal.splice(1, 0, ',');
                    newBalanceNoDecimal = newBalanceNoDecimal.join('');
                }else if(newBalanceNoDecimal.length == 5){
                    newBalanceNoDecimal = newBalanceNoDecimal.split('');
                    newBalanceNoDecimal.splice(2, 0, ',');
                    newBalanceNoDecimal = newBalanceNoDecimal.join('');
                }else if(newBalanceNoDecimal.length == 6){
                    newBalanceNoDecimal = newBalanceNoDecimal.split('');
                    newBalanceNoDecimal.splice(3, 0, ',');
                    newBalanceNoDecimal = newBalanceNoDecimal.join('');
                }

                //if the decimal is an even dollar, remove it and return the dollar amount, else return the dollar amount + the decimal
                if(newBalanceDecimal == '.00'){
                    balance = newBalanceNoDecimal;
                }else{
                    balance = newBalanceNoDecimal + newBalanceDecimal;
                }
            }

            return balance;
  
      default:
        return state
    }
};