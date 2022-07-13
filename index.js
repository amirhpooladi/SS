
function risheHa (a,b,c){

var delta=(b*b)-(4*a*c);
var jazrD=Math.sqrt(delta);
x1=(-b+jazrD)/(2*a);
x2=(-b-jazrD)/(2*a);
}

 function handleClick(){
    var a1=document.getElementById("a").value;
    var b1=document.getElementById("b").value;
    var c1=document.getElementById("c").value;
    risheHa(a1,b1,c1);


    if(x1){
        document.getElementById("delta").innerHTML=" ";
        document.getElementById("x1").innerHTML=x1;
        document.getElementById("x2").innerHTML=x2;
    }else{
        document.getElementById("delta").innerHTML="معادله ریشه حقیقی ندارد";
        
   }
   
 }





 
