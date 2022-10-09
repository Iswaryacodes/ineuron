// // Question no 1: Can we put duplicate values in the set object ?
////// Ans: No, we cannot put duplicated values in the set object.



// // Question no 2: Syntax for 
/////a) Creating new set object
// let set = new Set();


/////b) Adding new element to set object
// set.add(value);
////if numbers ,
// set.add(5);
/////if value is string then with " ".
// set.add("value");


/////c) Deleting element from set object 
// set.delete(value);

////if value is a number then as it is
// set.delete(5);
/////if value is string then with " ".
// set.delete("value");



///////Question no 3:  Create a set object with four random numbers from 0 to 10. Check if this
//////newly created set object has 8 in it. Use set object methods.


let set1 = new Set();
set1.add(2);
set1.add(6);
set1.add(7);
set1.add(5);

console.log(set1.has(5));

