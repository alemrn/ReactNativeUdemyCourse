// Expresión de clase
// const Rectangulo = class R {};
// Declaración de clase
class Rectangulo {}

// Hoisting
// variables definidas con var
// funciones definidas con function
// se llean al comienzo del archivo
// las clases no pueden tener Hoisting
console.log(Cuadrado);
function Cuadrado() {}
console.log(Cuadrado, Rectangulo);

const r = new Rectangulo();

class Chancho {
  propiedad = "mi propiedad";
  #hambre = false;
  constructor(estado = "Feliz", hambre = false) {
    this.estado = estado;
    this.#hambre = hambre;
  }

  hblar() {
    console.log(
      `souy un chancho ${this.estado} ${
        this.#hambre ? "Tiene hambre" : "no tiene hambre"
      }`
    ); // para pintar un valor dentro de un string es necesario utilizar ``
  }
}

const feliz = new Chancho("feliz", true);
console.log(feliz);
feliz.hblar();
const triste = new Chancho("triste");
// triste.hblar();
const nose = new Chancho();
// nose.hblar();
