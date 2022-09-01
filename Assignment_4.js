// Assignment No 4
//  Description: Create a function that takes a number as an arguement and returns the number of matchstickes in that step. 
// Say: matchHouses(1)  ---> 6
// matchHouses(4) ------>21
// matchHouses(87)------> 436



// let n =87;
function matchHouses(n=1)
{
    let common = n-1;     //common matchsticks in the step
    let total = (n*6) - common;  //matchstick per house
    console.log(total);   
}

matchHouses(6);