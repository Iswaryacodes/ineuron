//  //Question No 1: if str length is greater than 4, truncate it.
/*
function trunc()
{
    let word = "welcome";
    let x = word.length;
    console.log(`The Input String: ${word}`);
    if(x>4){
        let y = word.slice(0,3);
        return console.log(`The Output String: ${y}...`);
    }
        
}
trunc();
*/



//  //Question No 2: remove white spaces
/*
let a = " Hello Krish Sir and the entire iNeuron team. Thank you for this Full stack BlockChain Development course. The syllabus is clear and teaching is great as DAPP University. Once again thank you."
let y = a.replace(/\s/g,"");
console.log(y);
*/



// //Question No 3: swap 2 word string.
/*
let string = "Morning All";
let a = string.split(" ");
console.log(`The Given String is ${string}.`);
console.log(`The Output String is ${a[1]} ${a[0]}`);
*/


// //Question No 4: Replace the character a with x.
/*
let a = "anaconda";
let x = a.replace(/a/g,"x");
console.log(x);
*/


// // Question No 5: String to Array.
/*
let a = "hello"
let b = a.split("");
console.log(`The Given String: ${a}.`);
console.log(b);
*/

// // Question No 6: Occurance of a specified text.
/*
let a = " Hello Krish Sir and the entire iNeuron team. Thank you for this Full stack BlockChain Development course. The syllabus is clear and teaching is great as DAPP University. Once again thank you."
let b = a.includes("el");
console.log(b);
*/

// // Question No 7: break a string into newline.
/*
let a = "navin sanju hyder"
let b = a.replace(/ /g,"\n");
console.log(b);
*/




// // Question No 8: function to check whether the first character of a string is lowercase.
/*
let a = "Wwelcome";
function casecheck()
{
    let b = a.toLowerCase();
    if(a === b)
    console.log(`Yes, the given string starts with lowercase.`);
    else 
    console.log(`No, the given string does not starts with lowercase.`);
}

casecheck();
*/




// // Question No 9: verdict for possibilities of same word.
/*
let a  = "yes";
// converting the entire word to uppercase for a basic standard.
let b = a.toUpperCase();
console.log(b);
*/



// // Question No 10: 
////// the value of variable a is used for question nos a,b,c,d and f.

// let a = "blockChain";
// console.log(`The given String :${a}`);


// ////a) string to uppercase
// let b = a.toUpperCase();
// console.log(`Uppercase: ${b}`);


// // // b)first character to uppercase.
// let c = a.slice(1,a.length).toLowerCase();
// let d = a[0].toUpperCase();
// console.log(`The first Character is Capitalized: ${d}${c}`);


// // //c)string to lower case
// let f = a.toLowerCase();
// console.log(`Lowercase: ${f}`);



// // //d)string to two halves and swap them.
// let g = a.length/2;   // finding the length of a string
// let h = a.slice(0,g);  // halving 
// let i = a.slice(g,g*2);  //halving
// console.log(`The swapped after halved string: ${i} ${h}`);  // concat the halved as required



// //////e) count the repeating characters
// let string = "aaehiouuu";
// function stringcount()
// {
//     let count = 1;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === string[i + 1]) {
//         count++;
//       } else {
//         console.log(`${string[i]} occur ${count} times`);
//         count = 1;
//       }
//     }
//   }
//   stringcount();



////////f)reverse the string
let m = a.split("").reverse();
console.log(`The reversed string: ${m.join("")}`);