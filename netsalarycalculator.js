// Challenge 3: Net Salary Calculator (2025 rules)
// Calculates Net Salary based on PAYE, SHIF, NSSF, Housing Levy

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // 1. NSSF Contributions (Tier I & II, Feb 2025 onwards)
  // Both employee + employer pay 6% each, but we only deduct employee's part.
  // Pensionable pay is capped at 72,000
  let pensionablePay = Math.min(grossSalary, 72000); // cap at 72,000
  let nssf = pensionablePay * 0.06; // 6% employee contribution

  // 2. SHIF (replaced NHIF from Oct 2024)
  // Employee pays 2.75% of gross
  let shif = grossSalary * 0.0275;

  // 3. Housing Levy
  // Employee pays 1.5% of gross
  let housingLevy = grossSalary * 0.015;

  // 4. Taxable Income
  // Taxable = Gross - NSSF - SHIF - Housing Levy
  // (All three are deductible as of Dec 2024)
  let taxableIncome = grossSalary - (nssf + shif + housingLevy);

  // 5. PAYE (Progressive tax bands from July 2023). Rate is calculated in bands
  let paye = 0;
  if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.10;
  } else if (taxableIncome <= 32333) {
    paye = (24000 * 0.10) + ((taxableIncome - 24000) * 0.25); 
  } else if (taxableIncome <= 500000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30);
  } else if (taxableIncome <= 800000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((taxableIncome - 500000) * 0.325);
  } else {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxableIncome - 800000) * 0.35);
  }

  // 6. Personal Relief (fixed 2,400 per month)
  const personalRelief = 2400;
  paye = Math.max(paye - personalRelief, 0); // paye cannot go negative

  // 7. Net Salary
  const totalDeductions = nssf + shif + housingLevy + paye;
  const netSalary = grossSalary - totalDeductions;

  return {
    grossSalary,
    nssf: nssf.toFixed(2), // formatted to 2 decimal places
    shif: shif.toFixed(2),
    housingLevy: housingLevy.toFixed(2),
    paye: paye.toFixed(2),
    netSalary: netSalary.toFixed(2)
  };
}

// -------------------------------
// Test: Basic Salary: 150,000, Benefits: 20,000
console.log(calculateNetSalary(150000, 20000)); //(Net Salary, Total Benefits)
