const {getBfpM, getBfpF} = require("./getBfp.js")

test("La funcion getBfpM debe retornar 22.6 con los argumentos dados", () => {
    expect(getBfpM(98, 42, 180)).toBe(22.6)
})

test("La funcion getBfpF debe retornar 29.4 con los argumentos dados", () => {
    expect(getBfpF(98, 42, 180, 94)).toBe(29.4)
})