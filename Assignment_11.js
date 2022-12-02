/////// Question no: 1) Write a JavaScript program to take an array as input from the user and calculate
////// the sum of numbers in odd places and the sum of numbers at even places.

// let a = [25,1,4,6,3,7,9,7,1];
// let oddsum = 0;
// let oddcount = 0;
// let evencount = 0;
// let evensum = 0;

//     for(i=0;i<a.length;i++)
//     {
//         if(i%2==0)
//         {
//             oddsum =oddsum+ a[i];
//             oddcount = oddcount+1;       
//         }
//         else{
//             evensum =evensum+ a[i];
//             evencount = evencount+1; 
//         }       
//     } 
    // console.log(oddsum);
    // console.log(oddcount);
    // console.log(evensum);
    // console.log(evencount);

// //////a) Print the difference between the two sums
// let b= Math.abs(oddsum-evensum);
// console.log(`The difference between the two sum is ${b}`);

// //////b) Print the number of elements in odd places
// console.log(`The number of elements in odd places is ${oddcount}`);

// //////c) Print the number of elements in even places
// console.log(`The number of elements in even places is ${evencount}`);

// //////d) Print the average of all elements in the array
// let c = ((evensum+oddsum)/(oddcount+evencount)).toFixed(1);
// console.log(`The Average of all elements in the array is ${c}`);


//////e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

//     for(i=1;i<=oddsum && i<=evensum; i++)
//     {
//         if(oddsum%i==0 && evensum%i==0)
//         {
//             var d = i;
//             // console.log(d);
//         }
//     }
// console.log(`The G.C.D of ${oddsum} and ${evensum} is ${d}`);




//////Question no 2). Write a JavaScript program to take 2 arrays from the user and check if the
//////number 4 exists in any of the arrays, or both of the arrays.

// let d= [5,6,8,7,9];
// let e = [2,3,4,5];

// if(d.includes(4,0) && e.includes(4,0))
// console.log(`The number is available in both arrays`);
// else if(d.includes(4,0))
// console.log(`The number is available in array 1`);
// else 
// console.log(`The number is available in array 2`);



//////Question no:3). Write a JavaScript program to flatten the array, ie, turns a deep array into a plain array
// let e = [1,2,[2,3,4]];

// let flatarr = [].concat.apply([],e);
// console.log(flatarr);


//////Question no: 4)Write a JavaScript program to take an array as input from the user and:
//////a) Store all duplicate elements in a separate array
// let f = [2,3,4,2,6,4];
// const duplicated = (arr) => {
//     let sortedarray = arr.sort();
//     let result1  = [];

//     for(let i = 0; i< sortedarray.length - 1; i++)
//     {
//         if(sortedarray[i+1] === sortedarray[i])
//         {
//             result1.push(sortedarray[i]);
//         }
//     }
//     return result1;
//   };

// console.log(`The Duplicate element(s) in the array [${f}] is/are [${duplicated(f)}]`);




//////b) Remove the duplicate elements from the original array
// let f = [2,3,4,2,6,4];
// let result2 = [...new Set(f)];
// console.log(`The duplicated elements are removed from the original array [${f}] as [${result2}]`);


////////Question no: 5) Debug the given JavaScript program and execute the correct code.
function thirdLargest(arr, arr_size)
{
/* There should be
at least three elements */
if (arr_size < 3)
{
    console.log(" Invalid Input "); 
    return;
}

let first = arr[0];
for (let i = 1;i < arr_size-1 ; i++){
    if (arr[i] > first)
    {
        first= arr[i];
    }   
} 


let second = arr[0]; 
for (let i = 0;i < arr_size ; i++){
    if (arr[i] < first && arr[i] > second)
    {
        second = arr[i];
    }
}



let third = arr[0]; 
for (let i = 0;i < arr_size ; i++){ 
    if (arr[i] > third && arr[i] < second)
    {
        third = arr[i];
    }
}

console.log("The third Largest " + "element is ", third); 
}




let arr = [18 ,12, 13, 1, 20,10, 34, 16,19]; 
let n = arr.length;
thirdLargest(arr, n);

