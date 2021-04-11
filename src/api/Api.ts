const axios = require("axios").default;

export const URL = "https://lang-en.herokuapp.com/";

const DELETED = 'filter={"$and":[{"userWord.difficulty":"DELETED"}]}';
const LEARNED = 'filter={"$and":[{"userWord.difficulty":"LEARNED"}]}';
const HARD = 'filter={"$and":[{"userWord.difficulty":"HARD"}]}';

interface userWord {
  difficulty: "HARD" | "LEARNED" | "DELETED";
  optional: {
    rightCount: number;
    notRightCount: number;
  };
}

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
    const res = await axios
      .get(URL + `users/${userId.trim()}/words`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        return { data: [...response.data], status: 200 };
      });
    return await res;
  },

  setUserWord: async (
    token: string,
    userId: string,
    wordId: string,
    body: "HARD" | "LEARNED" | "DELETED"
  ) => {
    const res = await axios
      .post(
        URL + `users/${userId}/words/${wordId}`,
        {
          difficulty: body,
          optional: {
            rightCount: 0,
            notRightCount: 0,
          },
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((response: any) => {
        return { data: response.data, status: 200 };
      });
    return res;
  },

  updateUserWord: async (
    token: string,
    userId: string,
    wordId: string,
    body: any
  ) => {
    return axios.put(URL + `users/${userId}/words/${wordId}`, body, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  deleteUserWord: async (token: string, userId: string, wordId: string) => {
    axios.delete(URL + `users/${userId}/words/${wordId}`, {
      headers: { Authorization: "Bearer " + token },
    });
  },

  getUserStat: async (userId: string, token: string) => {
    const res = await axios
      .get(URL + `users/${userId.trim()}/statistics`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        return { data: response.data, status: 200 };
      })
      .catch((error: any) => {
        return { status: 404 };
      });
    return await res;
  },
  setUserStat: async (
    token: string,
    userId: string,
    learnedWords: number,
    words: Object,
    percent: Object,
    streak: Object
  ) => {
    axios.put(
      URL + `users/${userId}/statistics/`,
      {
        learnedWords,
        optional: {
          words,
          percent,
          streak,
        },
      },
      { headers: { Authorization: "Bearer " + token } }
    );
  },
  getAllDeleteUserWord: async (userId: string, token: string) => {
    const url =
      URL + `users/${userId}/aggregatedWords?wordsPerPage=3600&${DELETED}`;
    const res = axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        console.log(response);
        return { data: response.data[0].paginatedResults, status: 200 };
      });
    return res;
  },
  getAllLearnUserWord: async (userId: string, token: string) => {
    const url =
      URL + `users/${userId}/aggregatedWords?wordsPerPage=3600&${LEARNED}`;
    const res = axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        console.log(response);
        return { data: response.data[0].paginatedResults, status: 200 };
      });
    return res;
  },

  getAllHardUserWord: async (userId: string, token: string) => {
    const url =
      URL + `users/${userId}/aggregatedWords?wordsPerPage=3600&${HARD}`;
    const res = axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: any) => {
        console.log(response);
        return { data: response.data[0].paginatedResults, status: 200 };
      });
    return res;
  },
};
