let arrow = () => console.log('Good Morning, Today is Tuesday');
arrow();

let arrowArg = (arg1, arg2, arg3=1) => {
    let multiplication = arg1*arg2*arg3;
    console.log(`Multiplication of ${arg1} and ${arg2} and ${arg3} is ${multiplication} `);
}
arrowArg(5,5,2);
arrowArg(10,4);


let arrowArg1 = (arg1, arg2, arg3, arg4, arg5) => {
    console.log(arg1+arg2+arg3+arg4+arg5);
}

arrowArg1(100,100,200,349,756);
arrowArg1("I am", " Learning"," ES-6", " Features", " in Depth");






