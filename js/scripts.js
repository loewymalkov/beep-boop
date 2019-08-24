// business logic
// var inputNumber = "";
// var userName = "";

function createOutput (inputNumber, userName) {
  var userInputRange = [];
// return a range of numbers starting at 0 to the user inputted number
  for (var i = 0; i <= inputNumber; i++) {
    userInputRange.push(i); 
  };

  var outputArray = [...userInputRange];

  // make a for loop to go through all the elements and check for inclusion
  for (var i=0; i < outputArray.length; i++) {
    var stringNumber = outputArray[i].toString();
    var splitArray = (stringNumber + '').split();
      if (splitArray[0].includes("3")) {
        outputArray.splice(i, 1, ("I'm sorry, " + userName + ". I'm afraid I can't do that."));
      } else if (splitArray[0].includes("2")) {
        outputArray.splice(i, 1, "Boop!");
      } else if (splitArray[0].includes("1")) {
        outputArray.splice(i, 1, "Beep!");
      } else {
        console.log('nothing to replace');
      };
    };
    return outputArray;
};

// front end ui
$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("#user-number").val();
    var userName = $("#user-name").val();
    var displayArray = createOutput(inputNumber, userName);
    console.log(displayArray);
    $("#output").text(displayArray.map(function(x) {
      return (' "' + x.toString() + '"');
    }));
  });
});

