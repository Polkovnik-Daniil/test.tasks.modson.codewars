function hanoiRecord(disks: number): number {
  return 2 ** disks - 1;
};
console.log(hanoiRecord(5));