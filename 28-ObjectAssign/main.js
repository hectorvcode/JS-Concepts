const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

//video content
const john = {
  name: "John",
  knowJava: true,
  knowJS: false,
  codeJava() {
    console.log(`${this.name} is coding on Java`);
  },
};

const jsCoder = {
  knowJS: true,
  codeJS() {
    console.log(`${this.name} is coding on JS`);
  },
};

Object.assign(john, jsCoder);
console.log(john);
