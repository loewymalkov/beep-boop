# BEEP BOOP

### USE

This page will take a number and name and display a range of numbers and expressions, i.e. for 5 it will display "0, "Beep!", "Boop!", "I'm sorry[...]", 4, 5".

### SET UP

Open the page and enter a non-decimal number and name in the respective form boxes. Use the submit button to run the program.

### SPEC SHEET

| Expected behavior | Input | Output |
|-----|-----|-----|
| will take user input and fill a range of numbers in an array| "34"|[0, 1, 2, 3...34]|
|will take user name | Loewy | "Loewy"|
|will identify any number that contains 3 and replace it with text | 3 |"I'm sorry, [entered name]. I'm afraid I can't do that" | 
|will identify any number that contains 2 and replace it with text | 2 | Boop! |
|will replace any number that contains 1 and replace it with text | 1 | Beep! |
|will make sure that if a number contains a combination of 3 and 1 it will use rule for 3| 31 | "I'm sorry..."|
| will make sure that if a number contains a combination of 3 and 2 it will use a rule for 3| 32 | "I'm sorry..." |
| will make sure that if a number contains a combination of 2 and 1 it will use rule for 2 | 21 | Boop! |


### TECH USED

CSS, HTML, JavaScript, jQuery

### AUTHORS

Loewy Malkovich
loewymalkov@gmail.com

### LICENSE

Free use license (MIT)
Copyright (c) 2019