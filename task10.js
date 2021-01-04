var mypassword="abc123";
var password=prompt("Enter Password");
if(password=="")
{
    password=prompt("Please Enter Your Password");
}
if(password==mypassword)
{
    document.write("Correct! The password you entered matches the original password");
}
else
{
    document.write("Incorrect password");
}

