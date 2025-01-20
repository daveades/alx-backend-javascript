const process = require('process');

// Display welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Handle stdin input
process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
});

// Handle program exit
process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
