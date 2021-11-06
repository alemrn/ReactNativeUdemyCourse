const fn = (a, b, c) => console.log(a, b, c);

const arr = [1, 2, 3, 4];

fn(...arr);

const arr2 = [1, 2];
fn(...arr2);

//const arr3 = [...arr, ...arr2];
const arr3 = arr + arr2;
console.log(arr3);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: "chanchito" };

const obj3 = { ...obj1 };
obj1.a = 10;

const obj5 = {
  ...obj1,
  loading: true,
  data: {
    prop: "lala",
    animal: "perrito",
  },
};
console.log(obj5);
