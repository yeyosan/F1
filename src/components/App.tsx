import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { getSeasons } from "../fetch/endpoints";
import { SeasonsFilter } from "./SeasonsFilter";

const App = () => {
  const [seasons, setSeasons] = useState<Array<number>>([]);

  useEffect(() => {
    const loadSeasons = async () => {
      try {
        setSeasons(await getSeasons());
      } catch (err) {
        console.log("error", err);
      }
    };
    loadSeasons();
  }, []);

  return (
    <>
      <Heading>F1</Heading>
      <SeasonsFilter seasons={seasons} />
    </>
  );
};

export { App };
