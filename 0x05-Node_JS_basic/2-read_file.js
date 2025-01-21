const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const fileContent = fs.readFileSync(path, 'utf-8');

    // Split content into lines and remove empty lines
    const lines = fileContent.trim().split('\n');

    // Remove header line
    const students = lines.slice(1).filter((line) => line);

    // Get total number of students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fieldGroups = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstname);
    });

    // Print results for each field
    for (const [field, students] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
