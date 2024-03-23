// This part prompts the user to input their basic salary and other benefits.
const prompt = require('prompt-sync')();
function input() {
    console.log("Enter your basic salary and additional benefits.");
    return parseFloat(prompt());
}
// This section shows the user their gross salary.
const grossSalary = input();
console.log(`Your gross salary is ${grossSalary}`);
// This is where the code calculates the tax charged on the users gross salary
function payee(grossSalary){
    if (grossSalary <= 24000){
        return grossSalary * 0.1;
    }else if (grossSalary > 24000 && grossSalary <= 32333){
        return grossSalary * 0.25;
    }else if (grossSalary > 32333 && grossSalary <= 500000){
        return grossSalary * 0.3;
    }else if (grossSalary > 500000 && grossSalary <= 800000){
        return grossSalary * 0.325;
    }else {
        return grossSalary * 0.35;
    }
}

const PAYE = payee(grossSalary);
console.log(`Your tax is Ksh.${PAYE}`);
// Here the code calculates the value of NHIF deductions to be made to their salary
function nhifDeductions(grossSalary){
    if (grossSalary <= 5999){
        return 150;
    }else if (grossSalary > 5999 && grossSalary <= 7999){
        return 300;
    }else if (grossSalary > 7999 && grossSalary <= 11999){
        return 400;
    }else if (grossSalary > 11999 && grossSalary <= 14999){
        return 500;
    }else if (grossSalary > 14999 && grossSalary <= 19999){
        return 600;
    }else if (grossSalary > 19999 && grossSalary <= 24999){
        return 750;
    }else if (grossSalary > 24999 && grossSalary <= 29999){
        return 850;
    }else if (grossSalary > 29999 && grossSalary <= 34999){
        return 900;
    }else if (grossSalary > 34999 && grossSalary <= 39999){
        return 950;
    }else if (grossSalary > 39999 && grossSalary <= 44999){
        return 1000;
    }else if (grossSalary > 44999 && grossSalary <= 49999){
        return 1100;
    }else if (grossSalary > 49999 && grossSalary <= 59999){
        return 1200;
    }else if (grossSalary > 59999 && grossSalary <= 69999){
        return 1300;
    }else if (grossSalary > 69999 && grossSalary <= 79999){
        return 1400;
    }else if (grossSalary > 79999 && grossSalary <= 89999){
        return 1500;
    }else if (grossSalary > 89999 && grossSalary <= 99999){
        return 1600;
    }else {
        return 1700;
    }
}

const NHIF = nhifDeductions(grossSalary);
console.log(`Your NHIF deduction is Ksh. ${NHIF}`);
/* Here the code prompts the user to input their pensionable pay
in order for the code to calculate the NSSF deductions*/
const Prompt = require('prompt-sync')();
function Input() {
    console.log("Enter your pensionable pay");
    return parseFloat(prompt());
}
//The function below calculates the value of the NSSF deductions
function nssfDeductions(pensionablePay){
    return pensionablePay * 0.06;
}
const pensionablePay = Input();
const NSSF = nssfDeductions(pensionablePay);
console.log(`Your NSSF deduction is Ksh. ${NSSF}`);

/* Here the code calculates the user's net salary by
deducting the tax, NHIF deduction and the NSSF deductions
from the basic salary*/
function netSalary(grossSalary, PAYE, NHIF, NSSF){
  console.log(`Your net salary is ${grossSalary - (PAYE + NHIF + NSSF)}`);
}

netSalary(grossSalary, PAYE, NHIF, NSSF);