//A function that returns a promise which resolvesd after 2 seconds
function firstAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("First operation completed");
      resolve(10);
    }, 2000);
  });
}

//A function that returns a promise which resolves after 1 second
function secondAsyncOperation(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second operation completed");
      resolve(number * 2);
    }, 1000);
  });
}

//Chaining the two promises
firstAsyncOperation()
  .then((result) => {
    return secondAsyncOperation(result);
  })
  .then((finalResult) => {
    console.log("Final result: ", finalResult);
  })
  .catch((error) => {
    console.log("An error ocurred: ", error);
  });
