const prompt = require('prompt-sync')();
const input = function () {
    console.log("Enter student's marks.");
    return parseFloat(prompt());
}

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