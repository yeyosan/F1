import { API_URL, FETCH_OPTIONS } from "./constants";

const getSeasons = async () => {
  const response = await fetch(API_URL, FETCH_OPTIONS);
  const sesasons = await response.json();

  return sesasons;
};

export { getSeasons };
