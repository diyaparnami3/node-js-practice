const {
    add,
    subtract,
    multiply,
    isEven
} = require("./index");

test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
    expect(subtract(5, 2)).toBe(3);
});

test("multiplies two numbers", () => {
    expect(multiply(4, 3)).toBe(12);
});

test("checks even number", () => {
    expect(isEven(4)).toBe(true);
});

test("checks odd number", () => {
    expect(isEven(5)).toBe(false);
});
