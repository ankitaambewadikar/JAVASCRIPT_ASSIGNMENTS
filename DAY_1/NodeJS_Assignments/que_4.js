function main(){

    var num = 27,cnt=0;
    for(var count = 1; count <= num ; num ++){

        if( num % count == 0){
            break;
        }
    }
    if(cnt==2){
        console.log("the given number is prime");

    }
    else{
        console.log("Number is not prime");
    }
       
}
main();