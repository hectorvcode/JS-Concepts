function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John" });
    }, 1000);
  });
}

function processImage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Image processing failed"));
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

Promise.allSettled([fetchUserData(), processImage(), queryDatabase()])
.then(results => {
  results.forEach((result, index) => {
    if(result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled with value: `, result.value);
    } else {
      console.log(`Promise ${index + 1} fulfilled with reason: `, result.reason);
    }
  })
})