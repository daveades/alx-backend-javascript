const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split into lines and filter empty lines
    const lines = data.split('\n').filter(line => line.trim());
    
    // Get headers and remove them from lines
    const headers = lines[0].split(',');
    const students = lines.slice(1);
    
    // Count total students
    console.log(`Number of students: ${students.length}`);
    
    // Group students by field
    const fields = {};
    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, students: [] };
      }
      fields[field].count += 1;
      fields[field].students.push(firstName);
    });
    
    // Print statistics for each field
    Object.entries(fields).forEach(([field, data]) => {
      console.log(
        `Number of students in ${field}: ${data.count}. ` +
        `List: ${data.students.join(', ')}`
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;