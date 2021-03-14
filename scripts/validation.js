function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="Raj024" && password=="nameit")
    {
        alert("LOGIN Successful!");
        window.location.replace('./blockchain.html','_self','resizable=yes')
    }
    else{
        alert("LOGIN Failed!");
    }
}
