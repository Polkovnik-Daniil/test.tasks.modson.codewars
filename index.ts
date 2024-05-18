function onlyDuplic(row: string) {
  return row
    .split('')
    .filter(
      (v) => row.replace(new RegExp(v, 'g'), '').length !== row.length - 1
    )
    .join('');
}

console.log(onlyDuplic("abccdefee"));
