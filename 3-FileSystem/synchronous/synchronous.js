const fs = require("fs");

fs.writeFileSync("sync.txt", `synchronous file is created`);
const updateData = fs.appendFileSync("sync.txt", "this is updated text");

const data = fs.readFileSync("sync.txt", { encoding: "utf-8" });
console.log(data);
fs.unlinkSync('sync.txt')