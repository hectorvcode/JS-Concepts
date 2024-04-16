//Example: How to create a promise
function promiseToResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I resolved!");
    }, 1000);
  });
}

promiseToResolve().then((result) => {
  console.log(result);
});

//Example: How to create a promise that will be rejected
function promiseToReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("I rejected");
    }, 1000);
  });
}

promiseToReject().catch((error) => {
  console.log(error);
});

/**
 * Video
 */

const fs = require("fs");

const readFilePromise = new Promise((resolve, reject) => {
  fs.readFile("./file.txt", "utf-8", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

readFilePromise.then((data) => {
  console.log(data);
});

const fulfilled = Promise.resolve(42);
fulfilled.then((data) => {
  console.log(data);
});

const rejected = Promise.reject(new Error("Custom Error"));
rejected.catch((err) => {
  console.log(err);
});
