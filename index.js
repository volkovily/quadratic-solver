const a = 2;
const b = 1;
const c = -3;

console.log(`The equation is: (${a})x^2 + (${b})x + (${c}) = 0`);

const discriminant = b ** 2 - 4 * a * c;

if (discriminant > 0) {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  console.log(`There are 2 roots:\nx1 = ${x1}\nx2 = ${x2}`);
} else if (discriminant === 0) {
  const x = -b / (2 * a);

  console.log(`There are 1 root:\nx = ${x}`);
} else {
  console.log("There are 0 roots.");
}
