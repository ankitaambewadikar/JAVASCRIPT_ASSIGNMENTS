/*
Modified the program 1 created object using method 2
*/
var amitabh = {fname:"Amitabh",
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
var abhishek = Object.create(amitabh);

console.log(amitabh);

abhishek.fname="Abhishek";
abhishek.age=43;
abhishek.skills=["Dancing","Acting"];
abhishek.dateOfBirth=new Date("5-11-1970");
abhishek.married=true;
abhishek.profession="Dancing";
console.log("FirstName:"+abhishek.fname,"lastNmae:"+abhishek.lname,
            "Age:"+abhishek.age,"Skills:"+abhishek.skills,
            "Address:"+abhishek.address,
            "Date of Birth:"+abhishek.dateOfBirth,
            "Married:"+abhishek.married,
            "Profession:"+abhishek.profession);
/*console.log(abhishek.lname);
console.log(abhishek.age);
console.log(abhishek.skills);
console.log(abhishek.address);
console.log(abhishek.dateOfBirth);
console.log(abhishek.married);
console.log(abhishek.profession);*/