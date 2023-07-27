var eligible= function marriageEligibility(gender, age, name){
var result = gender =="female" && age>= 18 ? 'Hey ' +name+ ' You are eligible for marriage' 
: gender== "male" && age>=21 ? 'Hey ' +name+ ' You are eligible for marriage' : 'Hey ' +name+ ' You are not eligible for marriage';
console.log(result);
}

eligible("male", 21, "Shubham");
eligible("male", 20, "Bill");
eligible("female", 21, "Neha");
eligible("female", 17, "nikita");
