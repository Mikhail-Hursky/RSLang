import shuffle from "./shuffle";

describe("Shuffle function:", () => {
  test("should be array", () => {
    expect(
      shuffle({ 0: "21", 1: "22", 2: "23", 3: "24", 4: "25" }).__proto__
    ).toEqual(Array.prototype);
  });
  test("should return shuffle values", () => {
    expect(
      shuffle({ 0: "124", 1: "224", 2: "2222", 3: "11", 4: "67" })
    ).toHaveLength(5);
    expect(shuffle({ 0: "111", 1: "1111", 2: "222", 3: "33" })).toBeTruthy();
  });
});
