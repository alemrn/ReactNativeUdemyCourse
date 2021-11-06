const arr = [0, 1, 2, 3, 4, 5, 6, 7, "8"];

//const res = arr.filter((el) => el % 2 == 0);

const rest = arr.filter((el, i) => {
  console.log(el, " pos:", i);
  return el % 2 == 0;
});

console.log(rest);

const mapped = arr.map((el) => `<h1>${el}</h1>`);

console.log(mapped);
