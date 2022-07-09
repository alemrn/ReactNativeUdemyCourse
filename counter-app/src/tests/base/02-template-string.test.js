import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("prueba en 02-template-string.js", () => {
  test("prueba en metodo getSaludo", () => {
    const nombre = "Alejandro";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
});
