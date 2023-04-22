export interface Vector2 {
  x: number;
  y: number;
}

let variavel: Vector2 = {
  x: 10,
  y: 5,
};
let obj: object;

obj = {};

console.log("obj type:", typeof obj);
function soma(param1: Vector2, param2: Vector2) {
  return { x: param1.x + param2.x, y: param1.y + param2.y };
}

console.log(
  soma(
    {
      x: 10,
      y: 5,
    },
    {
      x: 10,
      y: 5,
    }
  )
);
