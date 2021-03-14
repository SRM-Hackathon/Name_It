function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="nameit")
    {
        alert("LOGIN Successful!");
        window.open('./blockchain.html','_blank','resizable=yes')
    }
    else{
        alert("LOGIN Failed!");
    }
}
