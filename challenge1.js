// This part imports the readline module and creates and interface for it to work
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// This part of the code evaluates the marks and determines the grade of the student
function gradeGenerator(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
// This part prompt the user to enter the marks for grading and outputs the grade
function Grade() {
    rl.question("Enter student's mark:",
     function(input) {
        const mark = parseFloat(input);
        
        if (mark >= 0 && mark <= 100) {
            const grade = gradeGenerator(mark);
            console.log("Grade:", grade);
        } else {
            console.log("Invalid input! Mark should be between 0 and 100.");
        }
        rl.close();
    });
}

Grade();