let a = 15;
let b = 7;
let c = 11;

let r = getCircumscribedCircleArea(a, b, c);
let area = getCircleArea(r);

console.log(`El Radio es: ${r}`);
console.log(`El Área es: ${area}`);

function getCircumscribedCircleArea(a, b, c) {
  const s = (a + b + c) / 2;

  return (a * b * c) / (4 * Math.sqrt( s * (s - a) * (s - b) * (s - c)));
}

function getCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
