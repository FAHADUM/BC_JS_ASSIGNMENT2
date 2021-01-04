var signal_color=prompt("Enter Traffic Signal Color");
signal_color=signal_color.toUpperCase();
if(signal_color=="RED")
    {
        document.write("Must Stop");
    }
    else if(signal_color=="YELLOW")
    {
        document.write("Ready to Move");
    }
    else if(signal_color=="GREEN")
    {
        document.write("Move Now");
    }
    else
    {
        alert(signal_color + " is not a vlid trafic color");
    }