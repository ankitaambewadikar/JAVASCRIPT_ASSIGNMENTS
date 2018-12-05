/*
Modified to create third object
*/
var amitabh = {fname:"Amitabh",
                mName:"Harichchandra",
                lname :"Bachchan",
                 age : 73,
                 skills:["acting","Singing","dancing"],
                address:{
                     city:"mumbai",
                     pincode:411053,
                     },
                 dateOfBirth:new Date("1950-3-30"),
                married:true,
                profession:"Actor"
};
var abhishek = Object.create(amitabh);

console.log(amitabh);

console.log(abhishek.fname="Abhishek");
console.log(abhishek.mName="Amitabh");
console.log(abhishek.lname);
console.log(abhishek.skills=["Dancing","Acting"]);
console.log(abhishek.address);
console.log(abhishek.dateOfBirth=new Date("1970-5-11"));
console.log(abhishek.married=true);
console.log(abhishek.profession="Actor");

var aradhya = Object.create(abhishek);

console.log(aradhya.fname="Aradhya");
console.log(aradhya.mName="Abhishek");
console.log(aradhya.lname);
console.log(aradhya.age=7);
console.log(aradhya.skills=["Playing","acting"]);
console.log(aradhya.address);
console.log(aradhya.dateOfBirth=new Date("2010-8-5"));
console.log(aradhya.married=false);
console.log(aradhya.profession="Student");