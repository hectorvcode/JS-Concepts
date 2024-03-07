/**
 * slice()
 * Extracts a section of a string and returns it as a new string
 * without modifying the original string
 */

const str = "My first string";
const myStr = str.slice(3, 8);
console.log(myStr);
console.log(str);

/**
 * trim()
 * Removes shitespace from both ends of a string and returns a new string
 * without modifying the original string
 * Whitespaces: space, tab, no-break space, line terminator characters
 */

const str2 = "   My first string    ";
const myStr2 = str2.trim();
console.log(myStr2);
console.log(str2);

/**
 * toLowerCase()
 * Returns the calling string value converted to lower case
 */

const str3 = "my FIRST sTrInG";
const myStrToUpper = str3.toUpperCase();
const myStrToLower = str3.toLowerCase();

console.log(str3);
console.log(myStrToUpper);
console.log(myStrToLower);

/**
 * split()
 * Takes a pattern and divides a string into an ordered list of substrings
 * by searching for the pattern, puts these substrings into an array and
 * returns the array
 */

const stringOfNames = "John,Ann,Jack,Ray,Bob";
const arrayOfNames = stringOfNames.split(",");
console.log(arrayOfNames);

/**
 * match()
 * Retireves the result of matching a string against a regular expression
 */

const str4 = "This IS my Test String";

const re = /is/gi;
console.log(str4.match(re).length);

/**
 * replace()
 * Returns a new string with one, some, or all matches of a pattern replaced by a replacement
 * The pattern can be a string or a RegExp and de replacement can be a string or a function
 * called for each match. If pattern is a string, only the first occurence will be replaced
 * The original string is left unchanged
 *
 * Parameters
 * pattern - can be a string or an object with a Symbol.replace method
 * replacement - cambe a string or a function
 */

const str5 = "JAVA JS .NET JS JAVA java";

//console.log(str5.replace("JAVA", "JS"))
//console.log(str5.replace(/JAVA/g, "JS"))
console.log(str5.replace(/JAVA/gi, "JS"))
