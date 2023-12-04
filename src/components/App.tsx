import React from "react";
import { Heading } from "./Heading";
import { SeasonsFilter } from "./SeasonsFilter";
import { DataProvider } from "./DataProvider";

const App = () => (
  <DataProvider>
    <Heading>F1</Heading>
    <SeasonsFilter />
  </DataProvider>
);

export { App };
