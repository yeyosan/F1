enum RankingTabs {
  DRIVERS = "drivers",
  TEAMS = "teams",
}

type SeasonsResult = Array<number>;

type TeamsRankingsResult = Array<{
  position: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
}>;

type DriversRankingsResult = Array<number>;

export {
  RankingTabs,
  SeasonsResult,
  TeamsRankingsResult,
  DriversRankingsResult,
};
