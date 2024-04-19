function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promises"), 50);
  });
}

function secondPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("chained"), 40);
  });
}

function promisesChaining() {
  let chainingResult = "";

  //PLACE YOUR CODE BETWEEN THIS LINE:
  firstPromise()
    .then((result) => {
      chainingResult = result;
      return secondPromise();
    })
    .then((result) => {
      chainingResult = `${chainingResult} ${result}`;
      console.log(chainingResult);
      return chainingResult;
      console.log(chainingResult, typeof chainingResult); // "Promises chained"
    })
    .catch((err) => {
      return err;
    }); //AND THIS ONE
}

promisesChaining();
