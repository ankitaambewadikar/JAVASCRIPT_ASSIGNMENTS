var saving= {
    accountNumber:1025689563,
    accountHolderName:"Abhishek",
    accountBalance:5000,
    isSalary:true,
    withdraw:function(amount){
        if(saving.accountBalance>amount){
            remainingBalance=this.accountBalance-amount;
            console.log("The reamaining balance in saving Account is:"+remainingBalance);
        }
        else
        console.log("Your transaction is cancelled as amount balance is low");


    }
};

var current= {
    accountNumber:2015890310,
    accountHolderName:"Aradhya",
    accountBalance:15000,
    odLimit:50000,
    withdraw:function(amount){
        if(current.accountBalance>amount){
            remainingBalance=this.accountBalance-amount;
            console.log("The reamaining balance in current account is:"+remainingBalance);
        }
        else
        console.log("Your transaction is cancelled as amount to withdraw is exceeding");

    }
};

saving.withdraw(2000);
current.withdraw(5000);
