// const rest = (a, ...argumentos) => {
//   console.log(a, argumentos);
// };

// rest(1, 3, 4, 5, 6, "Alejandro");

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// const { a, b, ...objrest } = obj;
// console.log(a, b, objrest);

const arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, ...arrrest] = arr;

console.log(a, b, arrrest);

const useState = () => ["valor", () => {}];

const [valor, setValor] = useState();

console.log(valor, setValor);
