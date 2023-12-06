import React, { ReactNode } from "react";
import { DataProvider, Heading, Rankings, SeasonsFilter } from "./";

const App = (): ReactNode => (
  <DataProvider>
    <Heading>F1 Rankings</Heading>
    <SeasonsFilter />
    <Rankings />
  </DataProvider>
);

export { App };
