//Here the code imports readline and creates an interface for it
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function input(message, callback) {
  rl.question(message, (answer) => {
    callback(parseFloat(answer));
  });
}

// This part prompts the user to enter the basic salary and also additional benefits
console.log("Enter your basic salary and additional benefits.");
input("", (grossSalary) => {
  console.log(`Your gross salary is ${grossSalary}`);

  // This is a function that calculates payee
  function payee(grossSalary) {
    if (grossSalary <= 24000) {
      return grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      return grossSalary * 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
      return grossSalary * 0.3;
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
      return grossSalary * 0.325;
    } else {
      return grossSalary * 0.35;
    }
  }

  const PAYE = payee(grossSalary);
  console.log(`Your tax is Ksh.${PAYE}`);

  function nhifDeductions(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) {
      nhif = 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      nhif = 300;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      nhif = 600;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      nhif = 750;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      nhif = 850;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      nhif = 900;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      nhif = 950;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      nhif = 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      nhif = 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      nhif = 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      nhif = 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
      nhif = 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      nhif = 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      nhif = 1600;
    } else if (grossSalary >= 100000 && grossSalary <= 109999) {
      nhif = 1700;
    } else if (grossSalary >= 110000 && grossSalary <= 119999) {
      nhif = 1800;
    } else if (grossSalary >= 120000 && grossSalary <= 129999) {
      nhif = 1900;
    } else if (grossSalary >= 130000 && grossSalary <= 139999) {
      nhif = 2000;
    } else if (grossSalary >= 140000 && grossSalary <= 149999) {
      nhif = 2100;
    } else if (grossSalary >= 150000 && grossSalary <= 159999) {
      nhif = 2200;
    } else if (grossSalary >= 160000 && grossSalary <= 169999) {
      nhif = 2300;
    } else if (grossSalary >= 170000 && grossSalary <= 179999) {
      nhif = 2400;
    } else if (grossSalary >= 180000 && grossSalary <= 189999) {
      nhif = 2500;
    } else if (grossSalary >= 190000 && grossSalary <= 199999) {
      nhif = 2600;
    } else {
      nhif = 2700;
    }
    return nhif;
  }

  const NHIF = nhifDeductions(grossSalary);
  console.log(`Your NHIF deduction is Ksh. ${NHIF}`);

  console.log("Enter your pensionable pay");
  input("", (pensionablePay) => {
    function nssfDeductions(pensionablePay) {
      return pensionablePay * 0.06;
    }

    // NSSF deductions are calculated here
    const NSSF = nssfDeductions(pensionablePay);
    console.log(`Your NSSF deduction is Ksh. ${NSSF}`);

    // Here the netsalary is calculated
    function netSalary(grossSalary, PAYE, NHIF, NSSF) {
      console.log(`Your net salary is ${grossSalary - (PAYE + NHIF + NSSF)}`);
    }

    netSalary(grossSalary, PAYE, NHIF, NSSF);

    rl.close();
  });
});