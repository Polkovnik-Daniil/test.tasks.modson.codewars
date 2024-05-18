function breakCamelCase(string: string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
console.log(breakCamelCase('camelCasing'));