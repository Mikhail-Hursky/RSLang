import { randomInteger, setRandomIndexWords } from "./Games";

describe("randomInteger function:", () => {
  test("should return random integer throw args", () => {
    expect(randomInteger(1, 4)).toBeDefined();
    expect(randomInteger(1, 4)).toBeGreaterThanOrEqual(1);
    expect(randomInteger(1, 4)).toBeLessThanOrEqual(4);
  });
});

describe("setRandomIndexWords function:", () => {
  test("should return array", () => {
    expect(setRandomIndexWords(1, 25, 10).__proto__).toEqual(Array.prototype);
  });
  test("should lengths equal 24", () => {
    const num = Math.floor(Math.random() * 10);
    expect(setRandomIndexWords(1, 25, num).length).toEqual(num + 4);
  });
  test("should return array with unique values", () => {
    const res = setRandomIndexWords(1, 25, 20);
    const arr = new Array(24).fill(0).map((e, i) => e + i);
    expect(res.map((e) => res.filter((f) => f === e).length)).toEqual(
      arr.map((e) => arr.filter((f) => f === e).length)
    );
  });
});
