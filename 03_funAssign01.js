
console.log("**************First Part**************");
console.log("                                                                                     ");
function first(){
    console.log("Learning JS is so exciting");
}
function second(){
    console.log("Towards wonderful possibilities");
}
first();
second();
console.log("---------------------------------");

function personalDetails(firstName, lastName, collegeName){
    console.log("My first name is:", firstName, "My last name is:", lastName, "My college name is:", collegeName);
}
var myDetails= personalDetails("Neha", "Newase", "T.K.I.E.T");
console.log("----------------------------------");

function swapValues(arg1, arg2){
    console.log("Before Swap value1=", arg1, "& value2=", arg2);
    var temp= arg1;
    arg1= arg2;
    arg2=temp;
    console.log("After Swap value1=", arg1, "& value2=", arg2);
}
swapValues("virat", "anushka");
console.log("----------------------------------");
swapValues(1000, 2000);
console.log("----------------------------------");

function addThreeValues(arg1, arg2, arg3) {
    var addition= arg1 + arg2 + arg3;
    console.log("Value of arg1=", arg1, "Value of arg2=", arg2, "Value of arg3=", arg3);
    return addition;
}
var result= addThreeValues(10.23, 600, 40);
console.log("Addition=", result);
console.log("----------------------------------");
var result= addThreeValues("Hello", "Good", "Morning");
console.log("Addition=", result);
console.log("                                                                                                                    ");
console.log("**************Second Part**************");
console.log("                                                                                     ");
function bankDetails(bankName, accountNum, location, pincode) {
    console.log("Bank Name=", bankName, "*", "Account Number=", accountNum, "*", "Location=", location, "*", "Pincode=", pincode);
}
bankDetails("CITY Bank", 3456278287, "Pune", 411056);
bankDetails("AXIS Bank", 6382636483, "Mumbai", 441056);
bankDetails("HDFC Bank", 4328282379, "Pune", 411037, "Open");

