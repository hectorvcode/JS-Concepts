//Example: A promise that will be rejected or resolved with usage of finally()

function myPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });
}

myPromise()
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Promise is done");
  });

/**
 * Video
 *
 * When the promise is settled, ie. either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the promise has been dealt with
 */

const fs = require("fs/promises");

/* const promise = fs.readFile("file.txt", "utf-8");

promise
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("finally code");
  }); */

const rejectedPromise = fs.readFile("file3.txt", "utf-8");
rejectedPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally code");
  });
