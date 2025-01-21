const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile(path, 'utf8');
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line);
      let output = `Number of students: ${students.length}\n`;

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const message = 'This is the list of our students\n';
    const data = await countStudents(process.argv[2]);
    res.send(message + data);
  } catch (error) {
    res.send(message + error.message);
  }
});

app.listen(port);

module.exports = app;
