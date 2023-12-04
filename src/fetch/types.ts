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

export { SeasonsResult, TeamsRankingsResult, DriversRankingsResult };
