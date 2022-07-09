import React from "react";
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Prueba PrimeraApp", () => {
  test("should mostrar el mensaje ", () => {
    const saludo = "Goku";
    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});
