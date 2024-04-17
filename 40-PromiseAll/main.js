//Simulate a fetch call to get user data
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

//Simulate image processing task
function processImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("image_processed.png");
    }, 2000);
  });
}

//Simulate a database query
function queryDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["data1", "data2", "data3"]);
    }, 500);
  });
}

//Use Promise.all to handle all three promises

Promise.all([fetchUserData(), processImage(), queryDatabase()])
  .then((results) => {
    const userData = results[0];
    const imageResult = results[1];
    const databaseResult = results[2];

    console.log("User data: ", userData);
    console.log("Image result: ", imageResult);
    console.log("Database result: ", databaseResult);
  })
  .catch((error) => {
    console.log("An error ocurred", error);
  });

/**
 * Video
 *
 * The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all lf the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error and will reject with this first rejectin message / error
 */

const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve("stringValue");
//const promise3 = Promise.reject("async error");

Promise.all([promise1, promise2]).then((results) => {
  console.log(results);
});

/* Promise.all([promise1, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  }); */
