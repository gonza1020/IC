import { render, screen } from "@testing-library/react";
import App from "./App";

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});*/

test("url is correct", () => {
  render(<App />);
  const linkElement = screen.getByTestId("learn-link");
  PC-18-como-usuario-quiero-ver-mi-nota-del-parcial
  expect(linkElement.href).toContain("twitter.com");

});

test("Profe tiene que aprobarme", () => {
  render(<App></App>);
  const nota = screen.getByTestId("exam");
  PC-18-como-usuario-quiero-ver-mi-nota-del-parcial
  expect(parseInt(nota.textContent)).toBeGreaterThan(8);

});
