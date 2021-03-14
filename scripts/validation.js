function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="Raj024" && password=="nameit")
    {
        alert("LOGIN Successful!");
        location.replace('./blockchain.html')
    }
    else{
        alert("LOGIN Failed!");
    }
}
