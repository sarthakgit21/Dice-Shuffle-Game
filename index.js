var reandom1=Math.floor(Math.random()*6)+1;
var img="images/dice"+reandom1+".png";
var randomimage=document.querySelectorAll("img")[0];
randomimage.setAttribute("src",img);


var reandom2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+reandom2+".png";
var randomimage2=document.querySelectorAll("img")[1];
randomimage2.setAttribute("src",img2);
if(reandom1>reandom2){
    document.querySelector("h1").innerHTML=("Player 1 Wins")
}
else if(reandom1<reandom2){
    document.querySelector("h1").innerHTML=("Player 2 Wins")
}
else{
    document.querySelector("h1").innerHTML=("Draw")

}
