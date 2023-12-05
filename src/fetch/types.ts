type SeasonsResult = Array<number>;

interface DriverRankingResult {
  position: number;
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  wins: number;
}

interface DriverRankingData {
  pos: number;
  driver: string;
  teamLogo: string;
  teamName: string;
  points: number;
  wins: number;
}

interface TeamRankingResult {
  position: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
}

interface TeamRankingData {
  pos: number;
  logo: string;
  team: string;
  points: number;
}

export type {
  SeasonsResult,
  DriverRankingResult,
  DriverRankingData,
  TeamRankingResult,
  TeamRankingData,
};
