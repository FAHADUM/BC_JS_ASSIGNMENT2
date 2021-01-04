var char=prompt("Enter a Character");
var n=char.length;
char=char.toUpperCase();
if(n==1)
{
    if(char=="A" || char=="E" || char=="I" || char=="O" || char=="U")
    {
        document.write("true");
    }
    else
    {
        document.write("false");
    }
}
else
{
    document.write("Enter only a Single Character.")
}