interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`x: ${p.x}, y: ${p.y}`);
}

const point = { x: 10, y: 20 };
const rect = { x: 5, y: 15, width: 100, height: 50 };

logPoint(point);
logPoint(rect);
