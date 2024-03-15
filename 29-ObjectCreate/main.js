const coder = {
  code() {
    console.log(`${this.name} is coding`);
  },
};

const john = Object.create(coder, {
  name: { value: "John" },
});

john.code();
