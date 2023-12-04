import React, { ReactNode, useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ActionType, useData, useDispatch } from "./DataProvider";
import { getSeasons } from "../fetch/endpoints";

const SeasonsFilter = (): ReactNode => {
  const { seasons } = useData();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSeasons = async () => {
      try {
        const result = await getSeasons();
        dispatch({ type: ActionType.SET_SEASONS, payload: result });
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
        <Select label="Seasons" value={seasons[0]}>
          {seasons.map((season) => (
            <MenuItem key={season} value={season}>
              {season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
};
export { SeasonsFilter };
