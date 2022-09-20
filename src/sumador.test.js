import sumar from "./sumador.js";

describe("Sumar", () => {
  it("TOMA EN CUENTA UNA CADENA VACÍA", () => {
    expect(sumar("")).toEqual(0);
  });
  it("TOMA EN CUENTA UNA CADENA CON UN SOLO NÚMERO", () => {
    expect(sumar("2")).toEqual(2);
  });
});
