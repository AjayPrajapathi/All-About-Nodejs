const fs = require("fs");


// to create a file
fs.writeFile("employee.txt", "file is created", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created");
  }
});

// to update a file
fs.appendFile("employee.txt", " \n It is the updated text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data is updated");
  }
});

//reading a file
fs.readFile("employee.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// unlink a file  or deleting a file
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is deleted");
  }
});
