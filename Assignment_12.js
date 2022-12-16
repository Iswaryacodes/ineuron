////////Question no 1: 1. Write a JavaScript program to map Employee Records according to Employee IDs.
// //Employee: { id, name, salary }

/*
let employee = {
    id: [67, 48, 29],
    name: ["Hitanshu", "Ninad", "Amandeep"],
    salary: [75000, 82000, 98000],
  };
  
  // a) Print an array of all employee ids
  console.log(`All Employee ids:`,employee.id);
  
  // b) Print count of employees
  console.log(`No of employees are `,employee.name.length);
  
  // c) Print the name of the employee according to their id { key: value }
  employee.id.forEach((a, b) => {
    console.log(a + " : " + employee.name[b]);
  });
  
  // d) Store the salaries of all employees in an array
  let salary = [];
  salary = employee.salary;
  console.log(`The salaries of all employees`,salary);
  
  // e) Calculate the average salary the company is paying to its employees
  let avg = 0;
  salary.forEach((c) => (avg += c));
  console.log(`The average salary, the company is paying to its employees`,avg / salary.length);
  */


////////Question no 2: Write a program in JavaScript to map the student ids, names and scores.

///////a) Add data for 3 students (use map functions)
/*
var map = new Map([
  ["Id", [1, 2, 3]],
  ["Name", ["Hitanshu", "Ninad", "Amandeep"]],
  ["Scores", [90,88,92]]
]) ;
console.log(map);


/////// b)Get Student Names using map functions
console.log(map.get("Name"));

/////// c)Delete Student Scores using map function
map.delete("Scores");
console.log(map);
*/

///////d)Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
/*
var map = new Map([
  ["Id", [1, 2, 3]],
  ["Name", ["Hitanshu", "Ninad", "Amandeep"]],
  ["Scores", [90,88,92]]
]) ;

function printOne(values) 
    {
       console.log(values);
    }
    console.log("-----One Parameter-----");
    map.forEach(printOne);
    
function printTwo(values, key) 
    {
       console.log(key + "  " + values);
    }
    console.log("-----Two Parameters-----");
    map.forEach(printTwo);
    
function printThree(values, key, map) 
    {
       console.log(key + "  " + values);
       console.log(map);
    }
    console.log("-----Three Parameters-----");
    map.forEach(printThree);
*/

//////// Q No 3: Write a JavaScript program to iterate over an array inputted by the user using mapping. Perform the square of all elements in the original array, store the squares in a new array and make a mapping for the squares and display it.
/*
let num =[1,2,3,4,5];
const sqr = num.map((num,index) => num**2);
console.log('Original Array ',num);
console.log('Mapped Square' , sqr);
*/