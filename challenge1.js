// The code first prompts the user to input the student's marks
const prompt = require('prompt-sync')();
const input = function () {
    console.log("Enter student's marks.");
    return parseFloat(prompt());
}
/* This is a function that determines which grade 
the student gets depending on their marks*/
const Marks = input();
function Grade(Marks) {
    if (Marks >79 && Marks <= 100){
        console.log('A');
    }else if (Marks >= 60 && Marks <=79){
        console.log('B');
    }else if (Marks > 49 && Marks <= 59){
        console.log('C');
    }else if (Marks > 40 && Marks <= 49){
        console.log('D');
    }else if (Marks < 40){
        console.log('E');
    }else {
        console.log("Not a valid input");
    }
}
Grade(Marks);