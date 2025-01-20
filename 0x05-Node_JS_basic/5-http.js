const http = require('http');
const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== '');
        
        const students = lines.slice(1);
        const csStudents = [];
        const sweStudents = [];

        students.forEach((student) => {
          const [firstName, , , field] = student.split(',');
          if (field === 'CS') csStudents.push(firstName);
          if (field === 'SWE') sweStudents.push(firstName);
        });

        const output = [
          `Number of students: ${students.length}`,
          `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
          `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`
        ].join('\n');

        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`This is the list of our students\n${data}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  }
});

app.listen(1245);

module.exports = app;