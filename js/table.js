function tab()
{
    var t=Number(document.getElementById("txt").value);//2
    for(i=1;i<=10;i++)
    {
        document.getElementById("dv").innerHTML+=t+"*"+i+"="+t*i+"<br>";
    }
}