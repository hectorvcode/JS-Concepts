const options = {
  width: 1024,
  height: 1024,
  name: "test",
};

const optionsSecond = Object.create(options);
optionsSecond.width = 1200;
console.log("options", options);
console.log("optionSecond Width", optionsSecond.width);
console.log("options Width", options.width);

const coder = {
  code() {
    console.log(`${this.name} is coding`);
  },
};

const john = Object.create(coder, {
  name: { value: "John" },
});

john.code();
