import { Api } from "../../api/Api";

export default function GameCountWords(
  userWords: any,
  wordId: string,
  answer: boolean,
  token: string,
  userId: string
) {
  if (
    userWords
      .filter((e: any) => e["difficulty"] === "DELETED")
      .map((e: any) => e["wordId"])
      .includes(wordId)
  ) {
    return;
  }
  let rightCount = 0;
  let notRightCount = 0;
  let difficulty;
  let wordIsLearn = userWords
    .filter((e: any) => e["difficulty"] !== "DELETED")
    .map((e: any) => e["wordId"])
    .includes(wordId);


  if (wordIsLearn) {
    let word = userWords.filter((e: any) => e["wordId"] === wordId)[0];
    difficulty = word["difficulty"];
    rightCount = word["optional"]["rightCount"];
    notRightCount = word["optional"]["notRightCount"];
  } else {
    difficulty = "LEARNED";
  }

  if (answer) {
    rightCount++;
  } else {
    notRightCount++;
    difficulty = "HARD";
  }

  const bodyObj = {
    difficulty,
    optional: {
      rightCount,
      notRightCount,
    },
  };
  if (wordIsLearn) {
    Api.updateUserWord(token, userId, wordId, bodyObj);
  } else {
    Api.setUserWordCount(token, userId, wordId, bodyObj);
  }
}
