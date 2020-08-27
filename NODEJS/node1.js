

  //TAKING INPUT FROM USER
  const prompt = require('prompt-sync')();   
  const String = prompt('PLEASE ENTER INPUT STRING: ' );
  var str=String.toLowerCase();
  console.log(String);

  //DECLARING ARRAY OF CONSTANT ALPHABETS FROM UPPERCASE A-Z AND LOWERCASE A-Z
  const low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //const hi = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 // String.toLowerCase();

  //CREATED FUNCTION COUNTOCCURENCE OF CHARACTER IN WHICH CHAR IS PASSED AS ARGUMENT 
  function countOccurrence (char) {
    var count = 0;                                  //INITIALIZING COUNTER TO ZERO
    for(var i=0; i<str.length; i++) 
    {
        if(str[i] ===char )                      //IF STRING MATCHES THE CHARCTER COUNTER INCREMENTED BY ONE 
                                                    //LOOP RUNS UNTIL STRING LENGTH 
        {
          count++;
        }
    }
    return count;
  }

  for(var i=0;i<26;i++)                                                     //PRINTING VALUES ON CONSOLE OF EACH ALPHABET WITH ITS COUNT
  {
  console.log("Count of "+ "   "+ low[i] +"    "+countOccurrence (low[i]));
  }
 
  