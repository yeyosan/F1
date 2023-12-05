import React, { ReactNode, SyntheticEvent } from "react";
import { ActionType, useData, useDispatch } from "../DataProvider";
import { RankingTabs } from "./";
import { Tabs, Tab } from "@mui/material";

const Component = (): ReactNode => {
  const { selectedRankingTab } = useData();
  const dispatch = useDispatch();

  const handleTabChange = (_: SyntheticEvent, value: string) => {
    dispatch({ type: ActionType.SET_SELECTED_RANKING_TAB, payload: value });
  };

  return (
    <Tabs value={selectedRankingTab} onChange={handleTabChange}>
      <Tab label="Drivers" value={RankingTabs.DRIVERS} />
      <Tab label="Teams" value={RankingTabs.TEAMS} />
    </Tabs>
  );
};

export { Component as Tabs };
