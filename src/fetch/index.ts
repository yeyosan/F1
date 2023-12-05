import { API_URL_GET, FETCH_OPTIONS } from "./constants";
import type {
  SeasonsResult,
  DriverRankingResult,
  DriverRankingData,
  TeamRankingResult,
  TeamRankingData,
} from "./types";

const getSeasons = async (): Promise<SeasonsResult> => {
  const response = await fetch(`${API_URL_GET}/seasons`, FETCH_OPTIONS);
  const seasons = (await response.json()).response as SeasonsResult;

  return seasons.reverse();
};

const getDriversRankingsBySeason = async (
  season: string
): Promise<Array<DriverRankingData>> => {
  const response = await fetch(
    `${API_URL_GET}/rankings/drivers?season=${season}`,
    FETCH_OPTIONS
  );
  const drivers = (await response.json())
    .response as Array<DriverRankingResult>;

  return drivers.map(
    ({ position, driver, team, points, wins }: DriverRankingResult) => ({
      pos: position,
      driver: `${driver.name} (${driver.abbr})`,
      teamLogo: team.logo,
      teamName: team.name,
      points,
      wins,
    })
  );
};

const getTeamsRankingsBySeason = async (
  season: string
): Promise<Array<TeamRankingData>> => {
  const response = await fetch(
    `${API_URL_GET}/rankings/teams?season=${season}`,
    FETCH_OPTIONS
  );
  const teams = (await response.json()).response as Array<TeamRankingResult>;

  return teams.map(({ position, team, points }: TeamRankingResult) => ({
    pos: position,
    logo: team.logo,
    team: team.name,
    points,
  }));
};

export { getSeasons, getDriversRankingsBySeason, getTeamsRankingsBySeason };
export type { SeasonsResult, DriverRankingData, TeamRankingData };
