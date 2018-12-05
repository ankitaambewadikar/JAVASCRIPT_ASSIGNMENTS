function calculator(){
       var menu = prompt("enter operation to perform \n 1)Add\n2)Substract\ns3)Multiply\n4)Divide\n5)Exponent\n6)Mean\n7)Quit");
   
       if(menu<1 || menu >7){
           alert("Error Select Again");

       }
   
           else if(menu==1)
          {
            add();
           
          } 

           else if (menu==2)
           substract();

           else if(menu==3)
           multiply();

           else if(menu==4)
           divide();

           else if(menu==5)
           exponent();

           else if(menu==6)
           mean();

           else{
               window.stop();
           }
       

       /*switch(opt){
           case 1 :
           add();
        
           case 2:substract();
           break;
           case 3:multiply();
           break;
           case 4: divide();
           break;
           default:alert("error select again");
       }*/
}

function add(){
    n1=window.prompt("Enter first number");
    n2=window.prompt("Enter second number");
    sum=parseInt(n1,10)+parseInt(n2,10);
    document.getElementById("result").value=sum;
    
}
function substract(){
    n1=window.prompt("Enter first number");
    n2=window.prompt("Enter second number");
    diff=parseInt(n1,10)-parseInt(n2,10);
    document.getElementById("result").value=diff;
  
    
}
function multiply(){
    n1=window.prompt("Enter first number");
    n2=window.prompt("Enter second number");
    mul=parseInt(n1,10)*parseInt(n2,10);
    document.getElementById("result").value=mul;
   
}
  
function divide(){
    n1=window.prompt("Enter first number");
    n2=window.prompt("Enter second number");
    div=parseInt(n1,10)/parseInt(n2,10);
    document.getElementById("result").value=div;
  
  
}

function exponent(){
    n1=window.prompt("Enter the base number");
    n2=window.prompt("Enter the exponent number");
    expo=Math.pow(n1,n2);
    document.getElementById("result").value=expo;
 
}

function mean(){
        var total=0;
        var cnt=0;
        var arr = window.prompt("enter numbers");
        while(!arr.includes("***")){
            total =+ parseInt(arr,10);
            cnt += 1;
            var arr = window.prompt("enter numbers");
        }     
        avg=total/cnt;
        document.getElementById("result").value=avg;
       
    }

