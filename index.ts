function validParentheses(parenths: string) {
  if (parenths.length % 2 != 0) return false;
  let str = parenths.slice();
  for (let i = 0; i <= str.length; i++) {
    str = str.replace(/\(\)/g, "");
  }
  return str.replace(/\(\)/g, "") === "";
}
console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));
