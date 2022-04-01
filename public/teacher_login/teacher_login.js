const { status } = require("express/lib/response");

function checkbox() {
    var x = document.getElementById("password");
    if(x.type==="password")
    {
        x.type="text";
    }

    else
    {
        x.type="password";
    }
    
}


function display()
{
    document.getElementById("t2").style.display = "none";
    document.getElementById("t1").style.display = "block";
}

document.getElementById("submit").onlic = loder;
