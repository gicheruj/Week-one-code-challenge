function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (tax)
  let PAYE;
  if (grossSalary <= 24000) {
    PAYE = grossSalary * 0.1;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    PAYE = grossSalary * 0.25;
  } else if (grossSalary > 32333 && grossSalary <= 500000) {
    PAYE = grossSalary * 0.3;
  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    PAYE = grossSalary * 0.325;
  } else {
    PAYE = grossSalary * 0.35;
  }

  // Calculate NHIF deductions
  let NHIF;
  if (grossSalary <= 5999) {
    NHIF = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    NHIF = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    NHIF = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    NHIF = 500;
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    NHIF = 600;
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    NHIF = 750;
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    NHIF = 850;
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    NHIF = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    NHIF = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    NHIF = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    NHIF = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    NHIF = 1200;
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    NHIF = 1300;
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    NHIF = 1400;
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    NHIF = 1500;
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    NHIF = 1600;
  } else if (grossSalary >= 100000 && grossSalary <= 109999) {
    NHIF = 1700;
  } else if (grossSalary >= 110000 && grossSalary <= 119999) {
    NHIF = 1800;
  } else if (grossSalary >= 120000 && grossSalary <= 129999) {
    NHIF = 1900;
  } else if (grossSalary >= 130000 && grossSalary <= 139999) {
    NHIF = 2000;
  } else if (grossSalary >= 140000 && grossSalary <= 149999) {
    NHIF = 2100;
  } else if (grossSalary >= 150000 && grossSalary <= 159999) {
    NHIF = 2200;
  } else if (grossSalary >= 160000 && grossSalary <= 169999) {
    NHIF = 2300;
  } else if (grossSalary >= 170000 && grossSalary <= 179999) {
    NHIF = 2400;
  } else if (grossSalary >= 180000 && grossSalary <= 189999) {
    NHIF = 2500;
  } else if (grossSalary >= 190000 && grossSalary <= 199999) {
    NHIF = 2600;
  } else {
    NHIF = 2700;
  }

  // Calculate NSSF deductions
  const NSSF = grossSalary * 0.06;

  // Calculate net salary
  const netSalary = grossSalary - (PAYE + NHIF + NSSF);
// This part prints out the results
  console.log(`Your gross salary is Ksh.${grossSalary}`);
  console.log(`Your tax (PAYE) is Ksh.${PAYE}`);
  console.log(`Your NHIF deduction is Ksh.${NHIF}`);
  console.log(`Your NSSF deduction is Ksh.${NSSF}`);
  console.log(`Your net salary is Ksh.${netSalary}`);
}
calculateNetSalary(56777,7900);