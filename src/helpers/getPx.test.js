const { getPx } = require("./getPx.js");

describe("La función getPx debe retornar valores dentro de un rango 0 a 400", () => {

    test("La funcion getPx debe retornar 400 cuando el argumento de la funcion es el número 26 o mayor y en el segundo argumento 'male'", () => {
        expect(getPx(27, "male")).toBe(400)
    });
    
    test("La funcion getPx debe retornar 0 cuando el argumento de la funcion es menor a 2 y en el segundo argumento 'male'", () => {
        expect(getPx(1, "male")).toBe(0)
    });
    
    test("La funcion getPx debe retornar 400 cuando el argumento de la funcion es el número 33 o mayor y en el segundo argumento 'female'", () => {
        expect(getPx(33, "female")).toBe(400)
    });
    
    test("La funcion getPx debe retornar 0 cuando el argumento de la funcion es menor a 10 y en el segundo argumento 'female'", () => {
        expect(getPx(7, "female")).toBe(0)
    }); 
});