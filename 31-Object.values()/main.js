/**
 * Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
 *
 * The only difference is that a for...in enumerates properties in the prototype chain as well
 *
 * Parameters:
 * obj - The object whose enumerable own property values are to be returned
 */

const options = {
  width: 1024,
  height: 1024,
  name: "test",
};

console.log(Object.values(options));

/**
 * Video
 */

const point = {
  x: 1,
  y: 2,
  z: 3,
};

console.log(Object.values(point));
