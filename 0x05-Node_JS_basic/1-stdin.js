const process = require('process');

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle stdin input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

// Handle program exit
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
