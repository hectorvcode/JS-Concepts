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
