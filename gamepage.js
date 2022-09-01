// random value generated
var y = Math.floor(Math.random() * 10 + 1);  
player_name = localStorage.getItem("player_name");
// counting the number of guesses
// made for correct Guess
var guess = 1
function submit()
{
    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("Congradulations! "+player_name+" You Guessed It Right In " + guess + " Guess(s)");
        guess = 1;
    }
    else if(x > y)
    {
        guess++;
        alert("Oops Sorry!! Try A Smaller Number.");
    }
    else
    {
        guess++;
        alert("Oops Sorry!! Try A Bigger Number.");
    }
}
// function for number guessed by user     
function playAgain()
{
    y = Math.floor(Math.random() * 10 + 1);
}