// business logic
var input = "10";
var userInputRange = [];

// use spread operator to make a copy of array or add other values 

// return a range of numbers starting at 0 to the user inputted number
for (var i = 0; i <= input; i++) {
  userInputRange.push(i); 
  // console.log(userInputRange);
};
var outputArray = [...userInputRange];

// make a for loop to go through all the elements w/ rules

for (var i=1; i <= outputArray.length; i++) {
  var stringNumber = outputArray[i].toString();
  var splitArray = (stringNumber + '').split();
    if (splitArray[0].includes("3")) {
      outputArray.splice(i, 1, "I'm sorry, name. I'm afraid I can't do that.")
    } else if (splitArray[0].includes("2")) {
      outputArray.splice(i, 1, "Boop!")
    } else if (splitArray[0].includes("1")) {
      outputArray.splice(i, 1, "Beep!")
    } else {
      console.log('nothing to replace');
    };
  console.log(outputArray);
};

// reverse operation order so that rule 3 takes presedence over 2&1 and 2 over 1


// front end ui
$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    // call userInputRange functions
    // call outputArray functions
    // display outputArray to display
  })

});