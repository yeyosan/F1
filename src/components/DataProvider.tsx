import React, { Dispatch, createContext, useContext, useReducer } from "react";
import {
  DriversRankingsResult,
  SeasonsResult,
  TeamsRankingsResult,
} from "../fetch/types";

interface Data {
  seasons: SeasonsResult;
  rankings: {
    teams: TeamsRankingsResult;
    drivers: DriversRankingsResult;
  };
}

interface Action {
  type: ActionType;
  payload?: any;
}

enum ActionType {
  SET_SEASONS = "setSeasons",
  SET_TEAMS_RANKINGS = "setTeamsRankings",
  SET_DRIVERS_RANKINGS = "setDriversRankings",
}

const initialData: Data = {
  seasons: [],
  rankings: {
    teams: [],
    drivers: [],
  },
};

const dataReducer = (
  { seasons, rankings }: Data,
  { type, payload }: Action
): Data => {
  switch (type) {
    case ActionType.SET_SEASONS:
      return { seasons: payload, rankings };
    case ActionType.SET_TEAMS_RANKINGS:
      return { seasons, rankings: { ...rankings, teams: payload } };
    case ActionType.SET_DRIVERS_RANKINGS:
      return { seasons, rankings: { ...rankings, drivers: payload } };
  }
};

const DataContext = createContext<Data>(initialData);
const DispatchContext = createContext<Dispatch<Action>>(() => {});

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialData);

  return (
    <DataContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

const useData = () => useContext<Data>(DataContext);
const useDispatch = () => useContext<Dispatch<Action>>(DispatchContext);

export { DataProvider, useData, useDispatch, ActionType };
