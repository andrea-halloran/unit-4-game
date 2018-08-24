var randomNumber = 0; 
var wins = 0; 
var losses = 0; 
var totalScore = 0; 

var random = Math.floor(Math.random() * 100) + 1;
document.querySelector("#random-number").innerHTML = this.random;

//random number for images
var donut1= Math.floor(Math.random()*15+1)
var donut2= Math.floor(Math.random()*20+1)
var donut3= Math.floor(Math.random()*15+1)
var donut4= Math.floor(Math.random()*20+1)

//clicking donuts for value
$("#donut1").on ('click', function(){
    totalScore = totalScore + donut1;
    console.log("New Score = " +totalScore);
    $("#totalScore").text(totalScore); 
        if (totalScore == random){
            alert("YOU WIN!")
            wins++ ;
            $("#wins").html(wins);
        }
        else if (totalScore > random){
            alert("YOU LOSE!")
            losses++ ; 
            $("#losses").html(losses);
        }   
  })  

  $("#donut2").on ('click', function(){
    totalScore = totalScore + donut2;
    console.log("New Score = " + totalScore);
    $("#totalScore").text(totalScore); 
        if (totalScore == random){
            alert("YOU WIN!")
            wins++ ;
            $("#wins").html(wins);
        }
        else if (totalScore > random){
            alert("YOU LOSE!")
            losses++ ; 
            $("#losses").html(losses);
           
        }   
  })  

  $("#donut3").on ('click', function(){
    totalScore = totalScore + donut3;
    console.log("New Score = " + totalScore);
    $("#totalScore").text(totalScore); 
          
        if (totalScore == random){
            alert("YOU WIN!")
            wins++ ;
            $("#wins").html(wins);
        }
        else if (totalScore > random){
            alert("YOU LOSE!")
            losses++ ; 
            $("#losses").html(losses);
        }   
  })  

  $("#donut4").on ('click', function(){
    totalScore = totalScore + donut4;
    console.log("New Score = " + totalScore);
    $("#totalScore").text(totalScore); 
          
if (totalScore == random){
    alert("YOU WIN!");
    wins++ ;
    $("#wins").html(wins);
    
}
else if (totalScore > random){
    alert("YOU LOSE!");
    losses++ ; 
    $("#losses").html(losses);
}  

})  

