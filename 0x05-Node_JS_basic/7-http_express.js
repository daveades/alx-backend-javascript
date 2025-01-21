const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
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

    Object.entries(fields).forEach(([field, names]) => {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const message = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.status(200).send(`${message}${data}`);
  } catch (error) {
    res.status(200).send(`${message}${error.message}`);
  }
});

const server = app.listen(port);

module.exports = app;