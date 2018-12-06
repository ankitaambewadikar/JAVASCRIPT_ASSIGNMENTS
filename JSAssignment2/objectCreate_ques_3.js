/*
JSAssignment2
Q3
Modified the program to create third object where the third object literals 
have some common propertis inherting from  object amitabh and abhishek.
*/
var amitabh = {fname:"Amitabh",                         // Object created using method1-Object created using literals
               
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
var abhishek = Object.create(amitabh);              //Object created using Object.create() where this object is inheriting some common properties from amitabh

console.log("FirstName:"+amitabh.fname,"lastNmae:"+amitabh.lname+"\n",
"Age:"+amitabh.age+"\n","Skills:"+amitabh.skills+"\nAddress:",
 amitabh.address,"\n",
"Date of Birth:"+amitabh.dateOfBirth+"\n",
"Married:"+amitabh.married,
"\nProfession:"+amitabh.profession);

abhishek.fname="Abhishek";                          //initializing the non commom properties
abhishek.skills=["Dancing","Acting"];
abhishek.dateOfBirth=new Date("1970-5-11");
abhishek.married=true;
abhishek.profession="Actor";

console.log("\nFirstName:"+abhishek.fname,"lastNmae:"+abhishek.lname+"\n",
"Age:"+abhishek.age+"\n","Skills:"+abhishek.skills+"\nAddress:",
 abhishek.address,"\n",
"Date of Birth:"+abhishek.dateOfBirth+"\n",
"Married:"+abhishek.married+"\n",
"Profession:"+abhishek.profession);

var aradhya = Object.create(abhishek);              //Object created using Object.create() where this object is inheriting some common properties from amitabh and abhishek


aradhya.fname="Aradhya";                            //initializing the non commom properties
aradhya.age=7;
aradhya.skills=["Playing","acting"];
aradhya.dateOfBirth=new Date("2010-8-5");
aradhya.married=false;
aradhya.profession="Student";

console.log("\nFirstName:"+aradhya.fname,"lastNmae:"+aradhya.lname+"\n",
"Age:"+aradhya.age+"\n","Skills:"+aradhya.skills+"\nAddress:",
 aradhya.address,"\n",
"Date of Birth:"+aradhya.dateOfBirth,"\n",
"Married:"+aradhya.married,"\n",
"Profession:"+aradhya.profession)