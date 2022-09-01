// Assignment No 6
// Description: 
// 1. Rectangle class with add() as method with subclass Square

/*
class Rectangle
{
    constructor(len,bre)    //constructor of REctangle class
    {
        this.len = len;
        this.bre = bre;
    }
    Area()      //method to print area
    {
        let area = this.len * this.bre;
        console.log(area);
    }
}
class Square extends Rectangle      //Square class is a subclass
{
    constructor(len,bre)      //Constructor of a Square class
    {
        super(len,bre);    //inherited 
        this.len = len;
        this.bre = len;    //since sides are equal for square 
    }
}
 let obj1 = new Rectangle(3,4);
 obj1.Area();
 let obj2 = new Square(4);
 obj2.Area();
 */


 // Question no 2: 
// Description: function to print nth largest number in an array.

/*
let a = [2,45,78,67,65,21,18,9,96];
function nth_largest(n)
{
    a.sort(function(a,b){return b-a});     //Descending ordered array
    console.log(`The ${n}th largest number in the given array is ${a[n-1]}`);
}
nth_largest(4);
*/


// Question no 3:
// Description: inserting dash in between each 2 even numbers.
/*
let num = 234656786;
let str = num.toString();     //converting int to string
let result = [str[0]];      //store in an array
for(let x=1;x<str.length;x++)    
{
    if((str[x-1]%2 ===0) && (str[x]%2 ===0))       //checking even numbers
    result.push('-',str[x]);          //inserting - in between 2 even numbers
    else
    result.push(str[x]);
}
console.log(result.join(''));     //converting array values to a string
*/