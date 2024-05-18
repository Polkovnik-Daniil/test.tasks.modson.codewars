function stringOfSorts(row: string, ordering: string) {
  var ordering_array: string[] = ordering.split("");
  let arr1 = row
    .split("")
    .filter((v) => ordering_array.includes(v)) //отсеиваем символы которые не поддаются сортировке
    .sort((a, b) => ordering_array.indexOf(a) - ordering_array.indexOf(b)); // сортируем строку по элементам ordering
  //Как в данном случае работает функция-компаратор?
  //Если a - b меньше 0, сортировка поставит a по меньшему индексу, чем b, то есть, a идёт первым.
  let arr2 = row.split("").filter((v) => !ordering_array.includes(v));
  return arr1.join("") + arr2.join("");
}

console.log(stringOfSorts("banana", "abn"));