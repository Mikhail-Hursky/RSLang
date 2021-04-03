const axios = require("axios").default;

export const URL = "https://lang-en.herokuapp.com/";

export const Api = {
  auth: (email: string, password: string) => {
    const res = axios
      .post(URL + "signin", { email, password })
      .then((response: any) => {
        console.log(response.data);

        return { ...response.data, status: 200 };
      })
      .catch(() => {
        return { status: 400, message: "Ошибка при авторизации" };
      });
    return res;
  },
  registration: (name: string, email: string, password: string) => {
    const res = axios
      .post(URL + "users", { name, email, password })
      .then((response: any) => {
        return { ...response.data, status: 200 };
      })
      .catch(() => {
        return { status: 400, message: "Ошибка при регистрации" };
      });
    return res;
  },
  getWords: (group: number, page: number) => {
    const res = axios
      .get(URL + `words?group=${group}&page=${page}`)
      .then((response: any) => {
        return { ...response.data, status: 200 };
      });
    return res;
  },

  getWordsArr: (group: number, page: number) => {
    const res = axios
      .get(URL + `words?group=${group}&page=${page}`)
      .then((response: any) => {
        return { data: [...response.data], status: 200 };
      });
    return res;
  },
};
