function unique_char(str1)
{
 var str=str1;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
var str1="yAAaH";
//console.log(unique_char(str1));
str2=str1.toLowerCase();
console.log(unique_char(str2));

   // var string1 = "VikrAant";
    //string2 = string1.toLowerCase();
    //var string3="";
    //string3 = unique_char(string2);
 
//abcd
//aabcddd

   //console.log( string3);

   for (var i = 0; i < str1.length; i++) 
   {
     var count = 0;
  
      for(var j=0; j< str2.length; j++)
      {
          if(str1[i] == str2[j])
          {                
              count++ ;
              
             
          }
          else{

            var flag=Boolean;
            flag=false;

          }
          
      }if(flag==false)
      console.log(count);
      
   }
   //console.log(count);
         
                   