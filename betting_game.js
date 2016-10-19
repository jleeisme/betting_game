$(function () {
  var bankroll = 100;
  
  // set the getGuess as a variable
  var $getGuess = $("#getGuess");
  var $whatIsGuess = $getGuess.find("[name=number]");  
  
  // set bet as a variable
  var $bet = $("#bet");
  var $whatIsBet = $bet.find("[name=bet]");
  var $finalBet = $("#betSubmit")

// calculate if user guess matches com number, reduce or add
// money as necessary
  $finalBet.on('click', function(e) {
    var number = Math.floor(Math.random() * 10) + 1;
    value = parseInt($whatIsGuess.val())
    betMoney = parseInt($whatIsBet.val())
    console.log(value, betMoney)
    if (value !== number) {
      bankroll = bankroll - betMoney;
      console.log("this is the answer" + number + " " + value)
    }
    else {
      bankroll = bankroll + betMoney;
    } 
    console.log(bankroll);
  })
});

