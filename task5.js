var num=6;
var guess_num=Number(prompt("Enter a Number ranging from 1 to 10"));
if(guess_num>=1 && guess_num<=10)
{
    if(guess_num==num)
    {
        document.write("Bingo! Correct Answer");
    }
    else if(guess_num==num+1)
    {
        document.write("Close enough to the correct answer");
    }
    else
    {
        document.write("You Fail to Guess the Number");
    }
}
else
{
    alert("Enter a valid number ranging from 1 to 10");
}