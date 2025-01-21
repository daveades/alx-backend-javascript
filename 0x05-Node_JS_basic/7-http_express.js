const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
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

        resolve(output.trim());
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${message}${data}`);
  } catch (error) {
    res.send(`${message}${error.message}`);
  }
});

app.listen(port);

module.exports = app;