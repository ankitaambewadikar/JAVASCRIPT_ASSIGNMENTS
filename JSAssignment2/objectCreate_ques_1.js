/*
Here according to the problem statement we are creating 2 objects 
and printing the deatils using global print function.

*/

var person1={                                           //this is first type of creating objects -using literals
        fname:"Amitabh",                                //assigning value to the object literals
        lname:"Bachchan",
        age : 73,
        skills:["acting","Singing","dancing"],          // creating array of object literal
        address:{                                       //here address is object and its object literals are city and pincode
            city:"mumbai",
            pincode:411053,
        },
        dateOfBirth:new Date("1950-3-30"),
        married:true,
        profession:"Acting"

};
var person2={                                           //similar how we have created objects
    fname:"Abhishek",
    lname:"Bachchan",
    age : 43,
    skills:["acting","Singing"],
    address:{
        city:"mumbai",
        pincode:411053,
    },
    dateOfBirth:new Date("1978-3-30"),
    married:true,
    profession:"Singing"

};

function print(){                               //function print to print the object literals
    console.log(person1);
    console.log(person2);
}

print();                                        //calling the print function globally