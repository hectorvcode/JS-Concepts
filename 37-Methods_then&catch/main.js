//Example: A promise that will be rejected or resolved depending on a parameter
function myPromise(param) {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

myPromise(true).then((data) => {
  console.log(data);
});

myPromise(false).catch((data) => {
  console.log(data);
});

/**
 * Video
 *
 * Promise
 * The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
 *
 * Promise States
 * pending: initial state, neither fulfilled nor rejected
 * fulfilled: meaning that the operation was completed successfully
 * rejected: meaning that the operation failed
 */

const fs = require("fs/promises");

const promise = fs.readFile("file.txt", "utf-8");

promise.then((data) => {
  console.log(data);
});

const rejectedPromise = fs.readFile("file3.txt", "utf-8");
rejectedPromise.then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})