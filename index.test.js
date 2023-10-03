var index = require("./index");

test("Returns 1", () => {
    expect(index.returnOne()).toBe(1);
});

test("Returns input + 1", () => {
    expect(index.returnPlusOne(1)).toBe(2);
});