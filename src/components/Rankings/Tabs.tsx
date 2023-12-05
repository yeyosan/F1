import React, { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import { ActionType, useData, useDispatch } from "../DataProvider";
import { getTeamsRankingsBySeason } from "../../fetch";
import { RankingTabs, TeamsRankingsResult } from "../../fetch/types";
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

  /* const [rankings, setRankings] = useState<TeamsRankingsResult>([]);

  useEffect(() => {
    const loadRankings = async () => {
      try {
        setRankings(await getTeamsRankingsBySeason(selectedSeason as string));
      } catch (err) {
        console.log("error", err);
      }
    };
    loadRankings();
  }, [selectedSeason]);

  console.info("rankings", rankings);
  return <span>Rankings</span>; */
};

export { Component as Tabs };
