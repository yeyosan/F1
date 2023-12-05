import { API_URL_GET, FETCH_OPTIONS } from "./constants";
import { SeasonsResult, TeamsRankingsResult } from "./types";

const getSeasons = async (): Promise<SeasonsResult> => {
  const response = await fetch(`${API_URL_GET}/seasons`, FETCH_OPTIONS);
  const seasons = (await response.json()).response as SeasonsResult;

  return seasons.reverse();
};

const getTeamsRankingsBySeason = async (
  season: string
): Promise<TeamsRankingsResult> => {
  const response = await fetch(
    `${API_URL_GET}/rankings/teams?season=${season}`,
    FETCH_OPTIONS
  );
  const teams = (await response.json()).response as TeamsRankingsResult;

  return teams;
};

export { getSeasons, getTeamsRankingsBySeason };
