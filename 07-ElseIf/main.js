/**
 * 18 - 25 -> 18%
 * 26 - 40 -> 20%
 * 41 - 99 -> 30%
 */

const age = 20;

if (age >= 18 && age <= 25) {
  console.log("18%");
} else if (age >= 26 && age <= 40) {
  console.log("20%");
} else if (age >= 41 && age <= 99) {
  console.log("30%");
} else {
  console.log("error");
}
