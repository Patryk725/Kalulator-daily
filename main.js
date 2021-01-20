    min = 50;
    max = 200;
    x = Math.random() * (max - min) + min;
    x = Math.round(x);
    x = Math.ceil(x / 10) * 10;


document.getElementById("push-ups").innerHTML = "Pompek: " + x; 

ile = 0;

document.getElementById("made").innerHTML = "Zrobiłeś: " + ile;

function add()
{
    ile += 10;
    document.getElementById("made").innerHTML = "Zrobiłeś: " + ile;

    if(ile>x){
        alert("Już nadrobiłeś pompki")
        ile = ile - 10;
        document.getElementById("made").innerHTML = "Zrobiłeś: " + ile;
    }
}

function minus()
{
    ile = ile - 10;
    document.getElementById("made").innerHTML = "Zrobiłeś: " + ile;
    if(ile<0)
    {
        alert("Po co schodzisz poniżej zera?")
        ile += 10;
        document.getElementById("made").innerHTML = "Zrobiłeś: " + ile;
    }

}
