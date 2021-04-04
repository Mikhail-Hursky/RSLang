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

  getGroupsArr: async (group: number) => {
    const timeStart = Date.now();

    const res = await axios
      .get(URL + `words/group?group=${group}`)
      .then((response: any) => {
        return { data: [...response.data], status: 200 };
      });
    const timeStop = Date.now();
    console.log(timeStart - timeStop);

    return await res;
  },

  getAllUserWord: async (token: string, userId: string) => {
    axios
      .get(URL + `users/${userId.trim()}/words`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        console.log(response);
      });
  },

  setUserWord: async (
    token: string,
    userId: string,
    wordId: string,
    difficulty: "HARD" | "LEARNED" | "DELETED"
  ) => {
    axios.post(
      URL + `users/${userId}/words/${wordId}`,
      {
        difficulty: difficulty,
        optional: {},
      },
      { headers: { Authorization: "Bearer " + token } }
    );
  },

  updateUserWord: async(token: string,
    userId: string,
    wordId: string,
    difficulty: "HARD" | "LEARNED" | "DELETED") =>{
      axios.put(URL + `users/${userId}/words/${wordId}`,,
      {
        difficulty: difficulty,
        optional: {},
      },
      { headers: { Authorization: "Bearer " + token } })
    },

  deleteUserWord:async(token: string,
      userId: string,
      wordId: string,
      difficulty: "HARD" | "LEARNED" | "DELETED") =>{
        axios.delete(URL + `users/${userId}/words/${wordId}`,
        {
          difficulty: difficulty,
          optional: {},
        },
        { headers: { Authorization: "Bearer " + token } })
    }
};
