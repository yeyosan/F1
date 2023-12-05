enum RankingTabs {
  DRIVERS = "drivers",
  TEAMS = "teams",
}

interface Header {
  key: string;
  label: string;
  align: "left" | "center" | "right";
  maxWidth?: number;
  isImage?: boolean;
}

const driversHeaders: Array<Header> = [
  { key: "pos", label: "Pos", align: "right", maxWidth: 60 },
  { key: "driver", label: "Name", align: "left" },
  { key: "teamLogo", label: "", align: "right", maxWidth: 80, isImage: true },
  { key: "teamName", label: "Team", align: "left" },
  { key: "points", label: "Points", align: "right", maxWidth: 60 },
  { key: "wins", label: "Wins", align: "right", maxWidth: 60 },
];
const teamsHeaders: Array<Header> = [
  { key: "pos", label: "Pos", align: "right", maxWidth: 60 },
  { key: "logo", label: "", align: "right", maxWidth: 80, isImage: true },
  { key: "team", label: "Name", align: "left" },
  { key: "points", label: "Points", align: "right", maxWidth: 60 },
];

export { Header, driversHeaders, teamsHeaders, RankingTabs };
