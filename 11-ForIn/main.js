/**
 * for...in
 */

const obj = {
  name: "John",
  lastName: "Doe",
};

for (let key in obj) {
  //console.log(key);
  console.log(obj[key]);
}
