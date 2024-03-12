function truncateString(str, num) {
  let truncatedStr = str.substring(0, num);
  if (num < str.length) {
    let result = truncatedStr + "...";
    return result;
  }
  return truncatedStr;
}

console.log(truncateString("This is a long string", 6)); // 'This i...'
console.log(truncateString("This", 6)); // 'This'
console.log(truncateString("The longest string", 6)); // 'This'
console.log(truncateString("eye", 3)); // 'This'
