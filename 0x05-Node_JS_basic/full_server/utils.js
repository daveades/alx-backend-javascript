import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.promises.readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = {};

      // Skip header row and process student data
      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i];
        if (line) {
          const [firstName, , , field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        }
      }

      resolve(students);
    })
    .catch(() => reject(new Error('Cannot load the database')));
});

export default readDatabase;
