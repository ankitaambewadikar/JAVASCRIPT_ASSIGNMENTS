/*
JSAssignment2:
Q.4 "USING CLASS - THE OBJECT IS CREATED:"
In the program we have implementd Bank Account operation withdrawl of
amount from savings and current where these both are objects operation 
is performed in withdraw() function and the balanceis returned by getCurrentBalance() function
*/


class BankAccount{                                                      //PARENT CLASS from where the child class inherits some properties

        constructor(accountNumber,accountHolderName,accountBalance){    // Constructor where the values passed through the object of class are received and
                                                                            //initilized to class variables using this.

        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    
    /*getCurrentBalance(){

    }*/
    
}

class Saving extends BankAccount{                                       //Child class 1
    constructor(accountNumber,accountHolderName,accountBalance,isSalary){
        super(accountNumber,accountHolderName,accountBalance)           //using super keyword the values received in the child constructor are passed to the parent constructor
        this.isSalary=isSalary;
    }
    withdraw(amount) {                                                  //withdraw() function to perform operation and check the conditions
            if(saving.accountBalance>amount){
                saving.accountBalance=saving.accountBalance-amount;
                console.log("Transaction successful");
            }
            else
            console.log("Your transaction is cancelled as account balance is low");
         }
         getCurrentBalance(){                                           //getCurrentBalance() function to display the balance amount after transaction 
             console.log("Balance Amount after transaction in Saving Account:"+saving.accountBalance);
         }
 
    }
   

class Current extends BankAccount{                                      //child 2 which inherits the properties from parent class using extends keyword
    constructor(accountNumber,accountHolderName,accountBalance,odLimit){
        super(accountNumber,accountHolderName,accountBalance)
        this.odLimit=odLimit;
    }

    withdraw(amount)                                                 //withdraw() function to perform operation and check the conditions
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
    }

    getCurrentBalance(){                                        //getCurrentBalance() function to display the balance amount after transaction 
        console.log("Balance amount after transaction in current Account is:"+current.withDraw);
    }

}

var saving = new Saving("123456789","Ankita",5000,true);        //initializing the properties creating object of child class and passing through constructor
var current= new Current("123456789","Ankita",100,10);

saving.withdraw(4000);                                          //calling withdraw() function and passing the amount to be withdrawn
saving.getCurrentBalance();                                     //calling the getCurrentBalance() function and display the account balance
current.withdraw(100);
current.getCurrentBalance();

