let a = 15;
let b = 7;
let c = 11;

let r = getInscritCircleRadius(a, b, c);
let area = getCircleArea(r);

print(`El Radio es: ${r}`);
print(`El Área es: ${area}`);

function getInscritCircleRadius(a, b, c) {
  const s = (a + b + c) / 2;

  return Math.sqrt(s * (s - a) * (s - b) * (s - c)) / s;
}

function getCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
