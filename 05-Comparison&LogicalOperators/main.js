//Comparison

let eq1 = 5 == 5;
let eq2 = 5 == "5";
console.log("eq1 = ", eq1);
console.log("eq2 = ", eq2);

let seq1 = 5 === 5;
let seq2 = 5 === "5";
console.log("Strict equality = ", seq1);
console.log("Strict equality = ", seq2);

let uneq = 5 != "5";
let suneq = 5 !== "5";

//Relational opeartors
let gt = 2 > 2;
let gte = 2 >= 2;
let lt = 3 < 3;
let lte = 2 <= 3 <= 3;
console.log("gt =  ", gt);
console.log("gte =  ", gte);
console.log("lt =  ", lt);
console.log("lte =  ", lte);

//Logical
let statement1 = 3 > 2;
let statement2 = 0 > 1;

let antitruth = !statement1;
console.log("antitruth = ", antitruth);

let or = statement1 || statement2;
console.log("or = ", or);

let and = statement1 && statement2;
console.log("and = ", and);

//typeof
let str = typeof "john";
let nmb = typeof 3.14;
let bool = typeof false;
console.log("str = ", str);
console.log("nmb = ", nmb);
console.log("bool = ", bool);
