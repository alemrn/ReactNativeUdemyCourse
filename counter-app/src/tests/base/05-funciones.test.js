import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import "@testing-library/jest-dom";

describe("Pruebas en 05-funciones", () => {
  test("should retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });
  test("getUsuarioactivo should retornar un objeto", () => {
    const userTest = {
      uid: "ABC567",
      username: "El_Papi1502",
    };

    const user = getUsuarioActivo("El_Papi1502");
    expect(user).toEqual(userTest);
  });
});
