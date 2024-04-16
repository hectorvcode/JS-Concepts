/**
 * Callback
 *
 * A callback function is a function passed into another function as an argument,
 * which is then invoked inside the outer funcion to complete some kind of routine or action
 * Used in JS to organize async code
 */

const fs = require("fs");

fs.readFile("file.txt", "utf-8", handleResult);

function handleResult(err, data) {
  if (err) throw err;
  console.log(data);
}
