enum RankingTabs {
  DRIVERS = "drivers",
  TEAMS = "teams",
}

type Alignment = "left" | "center" | "right";

interface Header {
  key: string;
  label: string;
  align: Alignment;
  maxWidth?: number;
  isImage?: boolean;
}

interface InputConfig {
  key: string;
  label: string;
  type: "text" | "number" | "file";
  align: Alignment;
  initialValue: string | number;
}

type Values = Record<string, string | number>;

const driversHeaders: Array<Header> = [
  { key: "pos", label: "Pos", align: "right", maxWidth: 60 },
  { key: "driver", label: "Name", align: "left" },
  { key: "teamLogo", label: "", align: "right", maxWidth: 80, isImage: true },
  { key: "teamName", label: "Team", align: "left" },
  { key: "points", label: "Points", align: "right", maxWidth: 60 },
  { key: "wins", label: "Wins", align: "right", maxWidth: 60 },
];
const driverInputsConfig: Array<InputConfig> = [
  {
    key: "driver",
    label: "Driver Name",
    type: "text",
    align: "left",
    initialValue: "",
  },
  {
    key: "teamName",
    label: "Team Name",
    type: "text",
    align: "left",
    initialValue: "",
  },
  {
    key: "points",
    label: "Points",
    type: "number",
    align: "right",
    initialValue: 0,
  },
  {
    key: "wins",
    label: "Wins",
    type: "number",
    align: "right",
    initialValue: 0,
  },
];

const teamsHeaders: Array<Header> = [
  { key: "pos", label: "Pos", align: "right", maxWidth: 60 },
  { key: "logo", label: "", align: "right", maxWidth: 80, isImage: true },
  { key: "team", label: "Name", align: "left" },
  { key: "points", label: "Points", align: "right", maxWidth: 60 },
];
const teamInputsConfig: Array<InputConfig> = [
  {
    key: "team",
    label: "Team Name",
    type: "text",
    align: "left",
    initialValue: "",
  },
  {
    key: "points",
    label: "Points",
    type: "number",
    align: "right",
    initialValue: 0,
  },
];

export {
  driversHeaders,
  driverInputsConfig,
  teamsHeaders,
  teamInputsConfig,
  RankingTabs,
};
export type { Header, InputConfig, Values };
