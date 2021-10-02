var randomnumber=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceimage);


var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage1="dice"+randomnumber1+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceimage1);

if(randomnumber>randomnumber1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber<randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Drow";
}