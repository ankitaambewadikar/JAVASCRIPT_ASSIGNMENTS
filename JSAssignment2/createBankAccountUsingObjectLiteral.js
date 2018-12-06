/*
JSAssignment2:
Q.4 
In the program we have implementd Bank Account operation withdrawl of
amount from savings and current where these both are objects operation 
is performed in withdraw() function and the balanceis returned by getCurrentBalance() function
*/

var saving= {
    accountNumber:1025689563,
    accountHolderName:"Abhishek",
    accountBalance:5000,
    isSalary:true,

    withdraw:function(amount) {                                         //withdraw function to perform operation and check wether there is balance in
                                                                        //in the account
        if(saving.accountBalance>amount){
            saving.accountBalance=saving.accountBalance-amount;
            console.log("Transaction successful");
        }
        else
        console.log("Your transaction is cancelled as account balance is low");
     },
     getCurrentBalance:function(){                                  //getCurrentBalance() function to show the reamining balance after transaction
         console.log("Balance Amount after transaction in Saving Account:"+saving.accountBalance);
     }
};

var current= {
    accountNumber:2015890310,
    accountHolderName:"Abhishek",
    accountBalance:100,
    odLimit:10,
  
    withdraw(amount)                                              //withdraw function to perform operation and check wether there is balance in
                                                                //in the account
    {
        current.withDraw=current.accountBalance-amount;
        if(current.withDraw<0)
        {
            var withdrawLimit=current.accountBalance+current.odLimit;
            if(withdrawLimit >=amount){
                console.log("Transaction  Successful");
                }
             else{
                    console.log("Transaction Failed.Amount to be withdrawn is exceeding limit");
                     }
             }
        else
            {
             console.log("Transaction Successful");
             }
    },
    getCurrentBalance:function(){                                                               //getCurrentBalance() function to show the reamining balance after transaction
        console.log("Balance amount after transaction in current Account is:"+current.withDraw);
    }
};

saving.withdraw(2000);
saving.getCurrentBalance();


current.withdraw(50);
current.getCurrentBalance();