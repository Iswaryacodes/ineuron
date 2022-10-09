//////Question no:1. Are Higher Order functions and Call back functions the same ? 
//////If not,briefly explain about both functions.
//////Ans: No, Higher order functions and collback functions are different. 
////// Function that returns a function is Higher order function whereas a function that is passed as an arguement of a function is callback function.



//////Question no:2) Is filter a Higher Order function in Javascript ? If yes, why ?
//////Ans: Yes, filter is a Higher order function. within the filter function we used to write function for calculation.


//////Question no:3) Give an example of a Higher Order function and a call back function used in the same program.

// function both(kalbak)     //add is higher-order function
// {
//     console.log(`The function both() is the Higher order function`);
//     return kalbak();  
// }
// function kalbak1()
// {
//     console.log("The function kalbak1() is a callback function");
// }

// both(kalbak1);



//////Question no:4) Carefully check the example below:
// const names= ['John', 'Tina','Kale','Max']
// function useFunction(arr,fn){
// for(let i=0; i<arr.length; i++){
// fn(arr[i]);
// }
// }
// function argFn (name){
// console.log("Hello " + name );
// }
// useFunction(names,argFn);

//////a) What will be the output of this program ?
//////Ans:
// Hello John
// Hello Tina
// Hello Kale
// Hello Max

//////b) Which function is a Higher Order function here ?
//////Ans: useFunction() is higher order function.

