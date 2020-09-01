function is_perfect()
{
var sum = 0;
var no=document.getElementsByName("number")[0].value;
   for(var i=1;i<=no/2;i++)
     {
         if(no%i == 0)
          {
            sum += i;
          }
     }
  
     if(sum == no && sum !== 0)
        {
       document.getElementsByName("output")[0].value=("IT IS A PERFECT NUMBER");
        } 

        else if(no==""||no==" ")
        {
       document.getElementsByName("output")[0].value=("PLEASE ENTER A NUMBER");
        } 
     else
        {
       document.getElementsByName("output")[0].value=("IT IS A  NOT PERFECT NUMBER");
        }   

 } 
 //count characters

function cnt_chr()
{

var check=Boolean;
var string= document.getElementById("input").value;
var str1= string.toLowerCase();

for(var i=0;i<str1.length;i++)
    {
    var sum=0;
    check=false; 

        for(var j=0;j<str1.length;j++)
            {

                if(str1[i]==str1[i+1])
                 {
                         check=true;
                 }

                if(str1[i] == str1[j])
                {
                    sum++;
                }


           }
        
    if(check == false)
    {
        document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+"\nOCCURENCE OF "+str1[i]+" is "+sum;
        document.getElementById("output").style.visibility="visible";
    }


    }

}
//roman number
function To_Roman(no) 
{
   var no=document.getElementById("number").value;
   var deci_Val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var romans = ["M","CM","D","CD","C", "XC","L","XL","X","IX","V","IV","I"];
 
   var romop="";
 
   for (var i = 0; i < deci_Val.length; i++)
    {
     while (deci_Val[i] <= no) 
     {
       romop += romans[i];
       no -= deci_Val[i];
     }
   }
 document.getElementById("roman").value=(romop)
};
