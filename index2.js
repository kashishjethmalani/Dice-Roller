var randomVariable1 = Math.floor(Math.random() * 6) + 1;
var randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage="images/dice"+randomVariable1+".png";
var randomDiceImage2="images/dice"+randomVariable2+".png";


document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomVariable1>randomVariable2){
    document.querySelector("h1").innerHTML="Player 1 wins!✨";

}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").innerHTML="Player 2 wins!✨";

}
else{
    document.querySelector("h1").innerHTML="And its a Draw!🤝";
}

