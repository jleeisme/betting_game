$(function () {
  var bankroll = 100;
  
  var $getGuess = $("#getGuess");
  var $whatIsGuess = $getGuess.find("[name=number]");  
  
  var $bet = $("#bet");
  var $whatIsBet = $bet.find("[name=bet]");
  var $finalBet = $("#betSubmit")

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

