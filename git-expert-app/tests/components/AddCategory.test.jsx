import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Saitama" } });
    expect(input.value).toBe("Saitama");
    fireEvent.input(input, { target: { value: "Goku" } });
    expect(input.value).toBe("Goku");
  });

  test("should call onNewCategory si el input tiene un valor", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");

    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onnewCategory if input is empty", () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
