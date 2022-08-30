// no 1
// Description: Floyyd's triangle
/*
let i,j,k=4,n=4,string="";      // k is the start no of the triangle,  n is no of rows to print
for(i=1;i<=n;i++) 
{ 
   for(j=1;j<=i;j++) 
    { 
        string=string+" "+k; 
     // console.log(string);
        k++;
    } 
string+="\n"; 
} 
console.log(string);
*/




// NO 2
// Decsription:To find the Given no is Amstrong no or not
/*
let num= 153;

let a = num % 10;     //finding digits of a number
let b = num/10;
let c= parseInt(b) % 10 ;
let d = parseInt(parseInt(b)/10);
// console.log(d) ;
// console.log(c);
// console.log(a);
let result =(a*a*a) +(c*c*c)+(d*d*d);
// console.log(result) ;
if(num===result) 
    console.log(`The Given number ${num} is an Amstrong number`);
else
    console.log(`The Given number ${num} is not an Amstrong number`);
*/


// No 3
// Description: To find the given no is special no or not

/*
let num = 157;
let a = num % 10;     //finding digits of a number
let b = num/10;
let c= parseInt(b) % 10 ;
let d = parseInt(parseInt(b)/10);
// console.log(d) ;
// console.log(b);
// console.log(c);
// console.log(a);
function factorial(n)       //factorial statement
{
    let fact = 1;
    for(i=1;i<=n;i++)
        fact *= i; 
    return fact
}

let d1 = factorial(a);     //function expression
let d2 = factorial(c);     //function expression
let d3 = factorial(d);     //function expression

let result  = d1+d2+d3;    //condition for special number

if(result === num)
    console.log(`The given no ${num} is a Special Number`);
else
    console.log(`The given no ${num} is not a Special Number`);
*/