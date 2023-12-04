import React, { ReactNode } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  seasons: Array<number>;
}

const SeasonsFilter = ({ seasons }: Props): ReactNode =>
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
  );

export { SeasonsFilter };
