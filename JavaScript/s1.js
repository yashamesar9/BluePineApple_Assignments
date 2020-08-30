function unique_char(str1)
    {
    var str=str1;
    var uniq="";
    for (var x=0;x < str.length;x++)
    {
        //aabcddd
    if(uniq.indexOf(str.charAt(x))==0)
    {
    uniq += str[x];  
    //abcd
    }
    }
    return uniq;  
    }  
    

    var string1 = "VikrAant";
    string2 = string1.toLowerCase();
    string1 = unique_char(string1.toLowerCase());
 
//abcd
//aabcddd

    console.log(string1 , string2);

     for (var i = 0; i < string1.length; i++) 
     {
       var count = 0;
    
        for(var j=0; j< string2.length; j++)
        {
            if(string1[i] == string2[j])
            {                
                count++ ;
               
            }

        }
        console.log("count");
    }
         
                   