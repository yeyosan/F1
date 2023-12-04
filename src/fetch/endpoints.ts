import { SeasonsResult, TeamsRankingsResult } from "./types";

const API_URL = "https://dosformulaone.free.beeceptor.com";

const getSeasons = async (): Promise<SeasonsResult> => {
  const response = await fetch(`${API_URL}/seasons`, { method: "GET" });
  const seasons = (await response.json()) as SeasonsResult;

  return seasons.reverse();
};

const getTeamsRankingsBySeason = async (
  season: number
): Promise<TeamsRankingsResult> => {
  const response = await fetch(`${API_URL}/rankings/teams/season/${season}`, {
    method: "GET",
  });
  const teams = (await response.json()) as TeamsRankingsResult;

  return teams;
};

export { getSeasons, getTeamsRankingsBySeason };
