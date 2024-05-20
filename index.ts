var Rot13 = (row: string): string => row.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
console.log(Rot13("Hello world!"));