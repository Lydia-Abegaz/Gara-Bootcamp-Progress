import promptsync = require('prompt-sync');
const prompt = promptsync();

function calculate(a:number, b:number, operator:string):number|string{
switch(operator){
 case '+': return a + b;
 case '-': return a - b;
 case '*': return a * b;
 case '/': 
   if (b===0){
    return"Error: Division by zero";
   }
   return a / b;
   default:
    return "Error: Invalid operator";
}
}
while(true){
    const offcheck= prompt("type 'off' to exit or press enter to continue: ");
    if(offcheck.toLowerCase()==='off'){
        console.log("Calculator turned off.");
        break;
    }
    const num1= Number(prompt("Enter first number: "));
    const num2= Number(prompt("Enter second number: "));
    const operator= prompt("Enter operator (+, -, *, /): ");
     const result=calculate(num1, num2,operator);
     console.log(`Result:${result}`);
}