//////Q No:1 
//////Description: Find the third edge of a triangle with two are provided.
////// given edges are integers
/*
function ThirdEdge(edge1,edge2){
    let edge3 = (edge1 +edge2)-1;
    // console.log(edge3);
    return edge3;
}
let result = ThirdEdge(10,7);
console.log(result);
*/


/////Q.No2). 
/*The right shift operation is similar to floor division by powers of
two. Write a function that mimics (without the use of >>) the right
shift operator and returns the result from the two given integers. Try
to solve this challenge by recursion
*/
/*
function FloorDivision(x,y){
    let result=(Math.floor(x)/(2**3));
    return result;
}

let DivisionResult = FloorDivision(80,3);
console.log(DivisionResult);
*/

////// Q no3:
/*3). Create a function that takes numbers b and m as arguments and
returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
with respect to x evaluated at x=m, where b and m are constants.
*/
/*
let b = 2; 
// let m =1;
var f = function(x){
    return Math.pow(x,b)+(x*(2.718^(b*x)));
}

var derivative = function(f,x){
    var h=0.0001;
    var dy = f(x+h) - f(x);
    var dx = h;
    return dy/dx;

}
console.log(derivative(f,2).toFixed(2));
*/

/////Q No 4)
/*This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. The first 5 numbers of the sequence, or
dots, are:
1, 3, 6, 10, 15
*/
/*
let n=6;
let sum =0;
for(i=1;i<=n;i++){
     let dots = (i*((i+1)/2));         
    sum = sum+dots;
}
console.log(`The sum of Triangle Sequence Nos for No ${n} is ${sum}`);
 */       


//////Q No.5
/*
5). Given a total due and an array representing the amount of
change in your pocket, determine whether or not you are able to pay
for the item. Change will always be represented in the following
order: quarters, dimes, nickels, pennies.
● quarter: 25 cents / $0.25
● dime: 10 cents / $0.10
● nickel: 5 cents / $0.05
● penny: 1 cent / $0.01
*/

function EnoughMoney([quarter,dime,nickel,penny],cost){
    let Total = quarter*0.25+dime*0.10+nickel*0.05+penny*0.01;
    if(Total >=cost)
        console.log(`True`);
    else 
        console.log(`False`);
}
EnoughMoney([2, 100, 0, 0], 14.11);


