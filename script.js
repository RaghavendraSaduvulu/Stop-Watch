var ID;
var seconds=1;
var n=1;
var min=1;
var h=1;
var n1=1
function start()
{
    if(n1 === 1)
    {
        ID=window.setInterval(msg,1000);
        n1++;
    }
}
function msg()
{
    if(seconds === n && n<10)
    {
        document.getElementById("s").innerHTML="0"+seconds;
        if(seconds===0 && min<10){
            document.getElementById("m").innerHTML="0"+min;
            if(min === 0 && h<10 && seconds === 0)
            {
                document.getElementById('h').innerHTML = "0"+h;
                h+=1;
            }
            else if(min === 0 && h>=10 && h<=59 && seconds === 0 )
            {
                document.getElementById('h').innerHTML =h;
                h+=1;
            }
            if(h=== 60)
            {
                h=1;
            }
            min+=1
        }
        else if(seconds === 0 && min>=10 && min<=59)
        {
            document.getElementById("m").innerHTML=min;
            min+=1
        }
        if(min === 60)
        {
            min=0;
        }
        seconds+=1; 
        n+=1;
    }
    else if(seconds === n && n>=10 && n<=59)
    {
        document.getElementById("s").innerHTML=seconds;
        seconds+=1; 
        n+=1;
    }
    if(seconds === 60)
    {
        seconds=0;
        n=0;
    }
}
function stop()
{
    window.clearTimeout(ID)
    n1=1;
}
function reset(){
    seconds=1
    n=1
    min=0
    n1=1
    h=0
    document.getElementById('s').innerHTML = "00";
    document.getElementById('m').innerHTML = "00";
    document.getElementById('h').innerHTML = "00";
}