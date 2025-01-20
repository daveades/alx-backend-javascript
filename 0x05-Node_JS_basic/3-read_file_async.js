const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    // Read file asynchronously
    const data = await fs.readFile(path, 'utf8');

    // Split into lines and filter empty lines
    const lines = data.split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // Remove header
    const students = lines.slice(1);

    // Create field groups
    const fields = {};
    for (const student of students) {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = {
          count: 0,
          students: [],
        };
      }
      fields[field].count += 1;
      fields[field].students.push(firstname);
    }

    // Print results
    console.log(`Number of students: ${students.length}`);
    for (const [field, data] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${data.count}. `
        + `List: ${data.students.join(', ')}`,
      );
    }

    return true;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
