const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("enter the first  value", (num1) => {
  interface.question("enter the second value ", (num2) => {
    // the value we get is in the form of the string so we need to convert it in number
    const sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    interface.close(sum);
  });
});
