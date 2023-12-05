import React, { ReactNode, useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ActionType, useData, useDispatch } from "./DataProvider";
import { getSeasons } from "../fetch";
import { SeasonsResult } from "../fetch/types";

const SeasonsFilter = (): ReactNode => {
  const { selectedSeason } = useData();
  const dispatch = useDispatch();

  const [seasons, setSeasons] = useState<SeasonsResult>([]);

  const handleSeasonChange = (evt: SelectChangeEvent) => {
    dispatch({
      type: ActionType.SET_SELECTED_SEASON,
      payload: evt.target.value,
    });
  };

  useEffect(() => {
    const loadSeasons = async () => {
      try {
        setSeasons(await getSeasons());
      } catch (err) {
        console.log("error", err);
      }
    };

    loadSeasons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !!seasons.length && (
      <FormControl fullWidth>
        <InputLabel>Seasons</InputLabel>
        <Select
          label="Seasons"
          value={selectedSeason || seasons[0].toString()}
          onChange={handleSeasonChange}
        >
          {seasons.map((season) => (
            <MenuItem key={season} value={season.toString()}>
              {season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
};
export { SeasonsFilter };
