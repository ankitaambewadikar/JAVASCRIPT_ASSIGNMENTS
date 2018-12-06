/*
Modified the program 1 created object using method 2 where object abhishek is having
some common propertis from object amitabh.
*/
var amitabh = {fname:"Amitabh",                       // Object created using method1-Object created using literals
                lname :"Bachchan",
                 age : 73,
                 skills:["acting","Singing","dancing"],
                address:{
                     city:"mumbai",
                     pincode:411053,
                     },
                 dateOfBirth:new Date("1950-3-30"),
                married:true,
                profession:"Acting"
};
var abhishek = Object.create(amitabh);                //Object created using Object.create() where this object is inheriting some common properties from amitabh

console.log(amitabh);

abhishek.fname="Abhishek";                               //initializing the non commom properties
abhishek.age=43;
abhishek.skills=["Dancing","Acting"];
abhishek.dateOfBirth=new Date("5-11-1970");
abhishek.married=true;
abhishek.profession="Dancing";
/*console.log("FirstName:"+abhishek.fname,"lastNmae:"+abhishek.lname,
            "Age:"+abhishek.age,"Skills:"+abhishek.skills,
            "Address:"+abhishek.city+abhishek.pincode,
            "Date of Birth:"+abhishek.dateOfBirth,
            "Married:"+abhishek.married,
            "Profession:"+abhishek.profession);*/
console.log("FirstName:"+abhishek.fname);
console.log("LastName:"+abhishek.lname);
console.log("Age:"+abhishek.age);
console.log("Skills:"+abhishek.skills);
console.log(abhishek.address);
console.log("Date of Birth"+abhishek.dateOfBirth);
console.log("Married"+abhishek.married);
console.log("Profession"+abhishek.profession);