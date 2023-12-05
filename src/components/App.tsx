import React from "react";
import { DataProvider, Heading, Rankings, SeasonsFilter } from "./";

const App = () => (
  <DataProvider>
    <Heading>F1</Heading>
    <SeasonsFilter />
    <Rankings />
  </DataProvider>
);

export { App };
