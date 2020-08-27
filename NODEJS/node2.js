//TAKING INPUT FROM USER
const prompt = require('prompt-sync')();   
const number = prompt('PLEASE ENTER number: ' );   
console.log(is_perfect(number));                    //CALLING THE FUNCTION WITH NUMBER AS A PARAMETER



function is_perfect(number)             //FUNCTION TO CHECK WHETHER A NUMBER IS PERFECT OR NOT
{
var temp = 0;                           //PERFECT NUMBER MEANS A NUMBER WHOSE SUM OF ALL THE DIVISORS WHICH PERFECTLY DIVIDE NUMBER WITH REMAINDER ZERO IS EQUALS TO THE NUMBER

   for(var i=1;i<=number/2;i++)        // LOOP IS ITERATED HALF OF THE NUMBER TIMES AS WE DO NOT GET A DIVISOR AFTER HALF OF NUMBER THAT HAS REMAINDER ZERO
    
     {
         if(number%i == 0)
          {
            temp = temp+i;
          }
     }
   
     if(temp ==number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
