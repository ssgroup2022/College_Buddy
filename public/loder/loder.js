
function on(id)
{
    document.getElementById(id).style.display="block";

}

function None()
{
   
        
        document.getElementById("a1").style.display= "none";
        document.getElementById("a2").style.display= "none";
        document.getElementById("a3").style.display= "none";
        document.getElementById("a4").style.display= "none";
        document.getElementById("a5").style.display= "none";
   

}
function loder()
{
    
    let n=1;
    let time=300;
    None();
    on("loder")
    setInterval(() => {
    
        if((n+5)%6==0)
        {
            document.getElementById("a6").style.display="none";
            on("a1");
        
    
        }
        else if((n+4)%6==0)
        {
            on("a2");
    
        }
        else if((n+3)%6==0)
        {
            on("a3");
    
        }
        else if((n+2)%6==0)
        {
            on("a4");
    
    
        }
        else if((n+1)%6==0)
        {
            on("a5");
            
    
    
        }
        else
        {
            None();
            on("a6")
            
    
        }
    
        n++;
    
        
    }, time);
}

// loder();