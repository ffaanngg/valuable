// Action file with most of the auth related stuff...

import axios from "axios";

const DISCORD_API = (route) => `https://discord.com/api${route}`;

export async function getSelf(token) {
  const resp = await axios.get(DISCORD_API`/users/@me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    validateStatus: (_) => true, // Axios has an annoying design of throwing HTTP errors as runtimes errors so prevent that
  });

  if (resp.status === 401) {
    return null;
  }

  return resp.data;
}

export function getLeaderboard() {}
