function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function processImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Image_processed.png");
    }, 2000);
  });
}

function queryDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["data1", "data2", "data3"]);
    }, 500);
  });
}

Promise.race([fetchUserData(), processImage(), queryDatabase()])
  .then((value) => {
    console.log("The first promise settled with value: ", value);
  })
  .catch((reason) => {
    console.log("The first promise settled with rejection: ", reason);
  });

/**
 * Video
 * The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(42), 1500));
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("string value"), 2000)
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("error message"), 1000)
);

/* Promise.race([promise1, promise2]).then((results) => {
  console.log(results);
}); */

Promise.race([promise1, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });
