const array = [
  false,
  0,
  0n,
  "",
  null,
  undefined,
  NaN,
  1,
  -3,
  "foo",
  true,
  [],
  {},
];

for (let value of array) {
  if (value) {
    console.log(`${value} es truty`);
  } else {
    console.log(`${value} es falsy`);
  }
}
