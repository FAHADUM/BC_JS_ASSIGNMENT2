var num1=Number(prompt("Enter First Number"));
var num2=Number(prompt("Enter Second Number"));
var opr=prompt("Enter Operation (+, -, *, /, %)");
var result;
if (opr=="+" || opr=="-" || opr=="*" || opr=="/" || opr=="%")
{
    if(opr=="+")
    {
        result=Number(num1)+Number(num2);
        document.write(num1 +" + "+ num2+" = "+ result );
    }
    else if(opr=="-")
    {
        result=Number(num1)-Number(num2);
        document.write(num1 + " " + opr + " " + num2+" = "+ result );
    }
    else if(opr=="*")
    {
        result=Number(num1)*Number(num2);
        document.write(num1 + " " + opr + " " + num2+" = "+ result );
    }
    else if(opr=="/")
    {
        result=Number(num1)/Number(num2);
        document.write(num1 + " " + opr + " " + num2+" = "+ result );
    }
    else
    {
        result=Number(num1)%Number(num2);
        document.write(num1 + " " + opr + " " + num2+" = "+ result );
    }
}
else
{
    document.write("Invalid Operation");
}
