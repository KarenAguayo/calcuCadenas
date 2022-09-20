import sumar from "./sumador.js";

describe("Sumar", () => {
  it("TOMA EN CUENTA UNA CADENA VACÍA", () => {
    expect(sumar("")).toEqual(0);
  });
});
