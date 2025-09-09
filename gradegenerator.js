// Challenge 1: Student Grade Generator
// Prompts the user for marks and outputs the grade

function generateGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid marks! Enter a value between 0 and 100.";
  } else if (marks > 79) { // 80 and above
    return "Grade: A";
  } else if (marks >= 60) { // 60-79
    return "Grade: B";
  } else if (marks >= 49) { // 49-59
    return "Grade: C";
  } else if (marks >= 40) { // 40-48
    return "Grade: D";
  } else { // below 40
    return "Grade: E";
  }
}

// Example Test Grade 65
console.log(generateGrade(65)); // Output: Grade B
