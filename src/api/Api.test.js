import { Api } from "./Api";

describe("Api get all group of words:", () => {
  const group = Math.floor(Math.random() * 10);

  function length(arr) {
    let len = 0;
    for (let i in arr) {
      len++;
    }
    return len;
  }

  const data = fetch(`https://lang-en.herokuapp.com/words/group?group=${group}`)
    .then((response) => response.json())
    .then((response) => {
      return { data: [...response], status: 200 };
    });

  const result = Api.getGroupsArr(group);

  test("should return correctly data", () => {
    expect(result).toEqual(data);
  });

  test("should return object with 600 length", () => {
    expect(length(result)).toBe(length(data));
  });
});

describe("Api get 1 page of group words:", () => {
  const group = Math.floor(Math.random() * 10);
  const page = Math.floor(Math.random() * 15);

  function length(arr) {
    let len = 0;
    for (let i in arr) {
      len++;
    }
    return len;
  }

  const data = fetch(
    `https://lang-en.herokuapp.com/words?group=${group}&page=${page}`
  )
    .then((response) => response.json())
    .then((response) => {
      return { data: [...response], status: 200 };
    });

  const result = Api.getWordsArr(group);

  test("should return correctly data", () => {
    expect(result).toEqual(data);
  });

  test("should return object with 20 length", () => {
    expect(length(result)).toBe(length(data));
  });
});
