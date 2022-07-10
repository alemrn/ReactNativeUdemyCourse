import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/something";

  test("debe de hacer match con el snapshot ", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });
});
