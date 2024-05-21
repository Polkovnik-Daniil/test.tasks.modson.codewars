function mineLocation(field: number[][]): number[] {
  let posX: number = -1;
  let posY: number = -1;
  field.map((valX, indexX) =>
    valX.map((valueY, indexY) => {
      if (valueY === 1) {
        posX = indexX;
        posY = indexY;
      }
    })
  );
  return [posX, posY];
}

console.log(
  mineLocation([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
