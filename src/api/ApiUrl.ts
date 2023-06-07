const BASE_URL =
  "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters";

export const API_URL = {
  FETCH_CHARACTER_LIST: `${BASE_URL}?limit=50&orderBy=modified&series=24229,1058,2023"`,
  FETCH_CHARATERR: `${BASE_URL}/`,
} as const;
