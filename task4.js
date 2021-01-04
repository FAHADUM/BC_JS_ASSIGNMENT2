var marks_obtain1=prompt("Enter Obtain Marks of Subject 1");
var marks_total1=prompt("Enter Total Marks of Subject 1");
var marks_obtain2=prompt("Enter Obtain Marks of Subject 2");
var marks_total2=prompt("Enter Total Marks of Subject 2");
var marks_obtain3=prompt("Enter Obtain Marks of Subject 3");
var marks_total3=prompt("Enter Total Marks of Subject 3");
var marks_obtain=Number(marks_obtain1) + Number(marks_obtain2) + Number(marks_obtain3);
var marks_total=Number(marks_total1) + Number(marks_total2) + Number(marks_total3);
var per, grade,remarks;

per=(marks_obtain/marks_total)*100;

if(per>=80)
{
    grade="A-one";
    remarks="Execelent";
}
else if(per>=70)
{
    grade="A";
    remarks="Good";
}
else if(per>=60)
{
    grade="B";
    remarks="You Need to Improve";
}
else
{
    grade="Fail";
    remarks="Sorry";
}
document.write("<h1>Marks Sheet</h1>");
document.write("<h2>Total Marks: "+ marks_total+"</h2>");
document.write("<h2>Marks Obtained Marks: "+ marks_obtain+"</h2>");
document.write("<h2>Percentage: "+ per+"%</h2>");
document.write("<h2>Grade: "+ grade+"</h2>");
document.write("<h2>Remarks: "+ remarks+"</h2>");