function abc(obj)
{
    var equ = document.getElementById("id1");
    var pushed =obj.innerHTML;
    
    
    if (pushed == "=")
        {
            try
            {
                var res = eval(equ.innerHTML);
                 equ.innerHTML = res;
            }
           catch(e)
               {
                equ.innerHTML = "Syntax Error";
                }
            
        }
    
    else if (pushed == "AC")
        {
            equ.innerHTML = "0";
        }
    
    
    
    else 
        {
            if(equ.innerHTML == "0")
                {
                    equ.innerHTML = pushed;
                }
            
            else
            {
                equ.innerHTML = equ.innerHTML+ pushed;    
            }
        }
       
}

function erase()
{
    var res = document.getElementById("id1");
    
    res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length-1);
}