import axios from "axios";

const VALUABLE_API = (route) =>
  `https://valuable-api-production.up.railway.app${route}`;

export async function getLeaderboard() {
  return (await axios.get(VALUABLE_API`/leaderboard`)).data;
}

export async function submitWord(word, token) {
  const res = await axios.post(
    VALUABLE_API`/play`,
    {},
    {
      params: {
        word: word
      },
      headers: {
        authorization: token,
      },
      validateStatus: (_) => true, // Axios has an annoying design of throwing HTTP errors as runtimes errors so prevent that
    }
  );

  return res;
}
