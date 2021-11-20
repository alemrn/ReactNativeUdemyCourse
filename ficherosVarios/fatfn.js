function fn() {
  this.prop = "propiedad";
  return "chanchito feliz";
}

fn.prototype.lala = function FuncionPrototipo() {};

const r = new fn();
// console.log(r);
// console.log(r.__proto__);

// fat arrow function
// no se pueden llamar con la palabra reservada new  pero las funciones normales si porque son clases.
// no tienen contexto por lo que no se pueden llamar con this. Si se utiliza lo que hace es llamar
// al this que está fuera de la función por lo que puedes machacar información
const fatFn = () => {
  this.prop = "propiedad";
  console.log(this);
  return "chanchito feliz";
};

const r1 = fatFn();

console.log(r1);
