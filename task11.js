var mytime=Number(prompt("Enter time in 24 hours format like 1900=7PM"));
if (mytime>=0 && mytime<=2400 && mytime%100==0)
{
    if(mytime>=0000 && mytime<1200)
    {
        document.write("GOOD MORNING");
    }
    else if(mytime>=1200 && mytime<1700)
    {
        document.write("GOOD AFTERNOON");
    }
    else if(mytime>=1700 && mytime<2100)
    {
        document.write("GOOD EVENING");
    }
    else
    {
        document.write("GOOD NIGHT");
    }
}
else
{
    document.write("Your time format is invalid, format like 1900=7PM");
}