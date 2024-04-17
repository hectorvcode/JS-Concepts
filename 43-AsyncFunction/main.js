function firstAsycOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First operation completed");
      resolve(10);
    }, 2000);
  });
}

function secondAsyncOperation(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second operation completed");
      resolve(number * 2);
    }, 1000);
  });
}

async function handleOperations() {
  try {
    const firstResult = await firstAsycOperation();
    const finalResult = await secondAsyncOperation(firstResult);
    console.log("Final result: ", finalResult);
  } catch (error) {
    console.eror("An error occurred: ", error);
  }
}

handleOperations();

/**
 * Video: Async / Await syntax and asynchronous functions
 */

const asyncNumber1 = new Promise((resolve) =>
  setTimeout(() => resolve(1), 1000)
);

const asyncNumber2 = new Promise((resolve) =>
  setTimeout(() => resolve(2), 1500)
);

async function sum(p1, p2) {
  const a = await p1;
  const b = await p2;

  return a + b;
}

console.log(sum(asyncNumber1, asyncNumber2));

async function main() {
  console.log(await sum(asyncNumber1, asyncNumber2));
}

main();
