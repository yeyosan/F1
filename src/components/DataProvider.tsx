import React, { Dispatch, createContext, useContext, useReducer } from "react";
import { RankingTabs } from "../fetch/types";

interface Data {
  selectedSeason?: string;
  selectedRankingTab: RankingTabs;
}

interface Action {
  type: ActionType;
  payload: string;
}

enum ActionType {
  SET_SELECTED_SEASON = "setSelectedSeason",
  SET_SELECTED_RANKING_TAB = "setSelectedRankingTab",
}

const initialData: Data = {
  selectedSeason: undefined,
  selectedRankingTab: RankingTabs.DRIVERS,
};

const dataReducer = (state: Data, { type, payload }: Action): Data => {
  switch (type) {
    case ActionType.SET_SELECTED_SEASON:
      return { ...state, selectedSeason: payload };
    case ActionType.SET_SELECTED_RANKING_TAB:
      return { ...state, selectedRankingTab: payload as RankingTabs };
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
