// business logic
var input = "10";
var userInputArray = [];
var outputArray = [];

// use spread operator to make a copy of array or add other values 
// return a range of numbers starting at 0 to the user inputted number
for (var i = 0; i <= input; i++) {
  userInputArray.push(i); 
  console.log(userInputArray);
};
// numbers that contain a 1 --> replace with "Beep!"
if (userInputArray.includes(1)) {
  outputArray.splice(index, "Beep!");
  console.log(outputArray); 
} else {
  console.log('does not contain 1');
}
// numbers that contain a 2 --> replace with "Boop!"
if (userInputArray == 2) {
  outputArray.push("Boop!"); 
} else {

};
// numbers that contain a 3 --> replace with "I'm sorry, " statement
if (userInputArray == 3) {
  outputArray.push("I'm sorry, Dave. I'm afraid I can't do that."); 
} else {

};



// front end ui
$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();

  })

});