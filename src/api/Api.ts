const axios = require("axios").default;

const URL = "https://lang-en.herokuapp.com/";

export const Api = {
  auth: (email: string, password: string) => {
    const res = axios
      .post(URL + "signin", { email, password })
      .then((response: any) => {
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
};
