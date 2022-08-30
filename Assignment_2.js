// No 1
// Description: check whether the triangle is Equilateral, isosceles or scalene.
/*
var a = 20;
var b = 40;
var c = 40;
function triangle_type(a,b,c)
{
    if(a===b && b===c)          // condition for equilateral triangle
        console.log(`The given sides ${a}, ${b} and ${c} of a triangle is Equilateral.`);
    
        else if((a===b && a!=c) || (b===c && a!=c))              // condition for Isoceles triangle
            console.log(`The given values ${a}, ${b} and ${c} of a triangle is Isosceles Triangle.`);
    else 
        console.log(`The given values ${a}, ${b} and ${c} of a triangle is Scalene Triangle.`);
}

triangle_type(a,b,c);
*/





// No 2
/*
Description:
Function using switch case to find grade of the student based on marks obtained
a. "S grade" if the marks are between 91 and 100.
b. "A grade" if the marks are between 81 and 90.
c. "B grade" if the marks are between 71 and 80.
d. "C grade" if the marks are between 61 and 70.
e. "D grade" if the marks are between 51 and 60.
f. "E grade" if the marks are between 41 and 50.
g. "Student has failed" if the marks are between 0 and 40.
h. Else output "Invalid marks".
*/

/*
let a=76;
console.log(`The obtained mark is ${a}`);
switch(true) {
case (a<=100 && a>=91):
  console.log("Grade S");
  break;
case (a<=90 && a>=81):
    console.log("grade A");
    break;
case (a<=80 && a>=71):
    console.log("grade B");
    break;
case (a<=70 && a>=61):
    console.log("grade C");
    break;
case (a<=60 && a>=51):
    console.log("grade D");
    break;
case (a<=50 && a>=41):
    console.log("grade E");
    break;
case (a<=40 && a>=1):
    console.log("Student has Failed");
    break;
    
    default:
    console.log("Invalid marks");
}
*/



// No 3
// Description: the sum of the multiples of 3 and 5 under 100.
/*
let n = 6;    //first term to start the sum 
let l = 100;   // last term for the sum

function multiplesOfThree()       //function for sum of multiples of 3 in the given range
{
    let sum = 0;
     for(let i = n; i < l; i++) 
     {
       if (i % 3 === 0 ) 
       sum += i;
     }
     return sum;
}

function multiplesOfFive()      //function for sum of multiples of 5 in the given range
{
    let sum = 0;
     for(let i = n; i < l; i++) 
     {
       if (i % 5 === 0 ) 
       sum += i;
     }
     return sum;
}

console.log(multiplesOfThree() + multiplesOfFive());
*/ 



// no 4
// Description: factorial of all prime numbers between a given range.

/*
let f = 2, l = 20;         // range is to be given here
for(let n=f; n<=l; n++)
{
    let flag = true;
    for (i = 2; i <= n - 1; i++)
    // checking for prime number
        if (n % i == 0)
        {
            flag = false;
            break;
        }
        if (flag == true)    //prime number 
        {
           let fact = 1;
               for(i=1;i<=n;i++)
                  fact *= i;     //factorial formula
                  console.log(`Prime Number is ${n} and its Factorial is ${fact}`);
        } 
        else
            continue;
}
*/

