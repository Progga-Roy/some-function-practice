
// find large number
const largestNumber = (x,y,z)=>{
    if(x>y && x>z){
    //  console.log('Large number is x',x);
    return x;
    }
    else if(y>x && y>z){
    //  console.log('Large number is y',y);
    return y;
    }
    else{
        // console.log('Large number is z',z);
        return z;
    }
}
const largeNum = largestNumber(12,33,11);
console.log(largeNum);

// leap year
const leapYear = year =>{
    if(year%4 == 0){
        console.log('This year is leap year',year)
    }
    else if(year%100 == 0){
        console.log('This year is leap year',year)
        // return `this is leap year ${year}`
    }
    else{
        console.log('This year is not leap year',year)
    }
   
} 
const findYear =  leapYear(2029);

// natural numbers 
let naturalNumbers =(num)=>{
    let sum=0;
for(let i=1 ; i<=num; i++){
    sum=sum+i;
    
}
return sum;
}
let numbers = naturalNumbers(10)
console.log(numbers);

// find factorial
const factorial =(fact)=>{
let f=1;
for(let i =1;i<=fact; i++){
f=f*i;
}
return f;
}
const findFactorial = factorial(6);
console.log(findFactorial)

// fibonacci series
const fibonacci = (number)=>{
    let fibo =[0,1];
    for(let i =2; i<=number;i++){
    fibo[i]= fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
const findFibonacci = fibonacci(12)
console.log(findFibonacci);

// multiplication table
const multiplicationTable = n=>{

    for(let i=1; i<=10;i++){
        console.log(n + "*" + i +"=" + n*i);
    }
}
const findTable = multiplicationTable(8);

// check alphabet 
const checkAlphabet = (char)=>{
    
    if((char>='a' && char<='z')||(char>='A' && char<='Z')){
        console.log('YES,it is a Alphabet')
    }
    else{
        console.log('NO, it is not a Alphabet')
    }

}
const alphabet= checkAlphabet('a');


// swapping numbers
const swappingNumbers =(num1,num2)=>{
let temp;
  temp = num1;
  num1 = num2;
  num2 = temp;
  return temp;
}
const checkSwapping = swappingNumbers(35,55);
console.log(checkSwapping);

// quotient and remainder

const quotientAndRemainder = (dividend,divisor)=>{
    let quotient = dividend / divisor;
    let remainder = dividend % divisor;
    return `
     Quotient = ${quotient}
     Remainder = ${remainder}
     `
}
const outputOfQandR = quotientAndRemainder(32,4);
console.log(outputOfQandR)