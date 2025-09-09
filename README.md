# CODE CHALLENGE 1
**Tools Overview**
1. **Student Grade Generator :**
 This tool allows a user to input student marks (between 0 and 100) and returns the corresponding grade based on the following grading system:
A → greater than 79,
B → between 60 and 79,
C → between 49 and 59,
D → between 40 and 49, and
E → less than 40.
**The program validates inputs and ensures only numbers within the range are accepted. It’s useful for quickly classifying student performance.**


2. **Speed Detector:**
 This tool evaluates a driver’s speed against the legal speed limit (70 km/s):
If the speed is 70 or below, it simply prints "Ok".
For every 5 km/s above the limit, the driver receives 1 demerit point.
If the driver accumulates more than 12 demerit points, their license is suspended.
**This program demonstrates how conditional logic can be used to enforce rules, similar to real-world traffic monitoring systems.**


3. **Net Salary Calculator:**
 This tool computes an employee’s Net Salary in Kenya (2025 rules) by considering all statutory deductions:
NSSF (6%) → Retirement contributions, capped at pensionable pay of 72,000.
SHIF (2.75%) → Social Health Insurance Fund, replacing NHIF.
Housing Levy (1.5%) → Mandatory contribution to affordable housing.
PAYE (progressive tax bands) → Income tax calculated in multiple brackets.
Personal Relief (Ksh 2,400) → Applied to reduce PAYE liability.
The tool outputs a full payslip breakdown, including:
Gross Salary
NSSF Contribution
SHIF Contribution
Housing Levy
PAYE Tax
Net Salary (final take-home pay)
**This is the most comprehensive tool, simulating a real-world payroll system that employers use to process monthly salaries.**

# Project Setup
**Prerequisites**
Install Node.js on your computer.
A text editor like VS Code is recommended.
Steps
**Clone this repository**
git clone <repo-link>
**Navigate into the project folder**
cd <project-folder>
Run each tool individually:
a) Speed Detector
Open speedDetector.js.
Edit the file to enter a test speed value.
Run it in the terminal:
node speedDetector.js
b) Student Grade Generator
Open gradeGenerator.js.
Enter a sample marks value inside the file.
Run it in the terminal:
node gradeGenerator.js
c) Net Salary Calculator
Open netSalaryCalculator.js.
Enter values for grossSalary and run it to see deductions (PAYE, NSSF, SHIF, Housing Levy) and net salary.
Run it in the terminal:
node netSalaryCalculator.js



# License

Copyright (c) 2025 Jairus Otanga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
