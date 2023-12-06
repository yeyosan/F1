import React, { useState } from "react";
import { Tabs } from "./Tabs";
import { Table } from "./Table";
import { Button, Stack } from "@mui/material";
import { useData } from "../DataProvider";
import { RankingTabs } from "./constants";
import { CreateItemDialog } from "./CreateItemDialog";

const Container = () => {
  const { selectedRankingTab } = useData();
  const isDriverTab = selectedRankingTab === RankingTabs.DRIVERS;
  const label = `Add ${isDriverTab ? "Driver" : "Team"}`;

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleAddItem = () => setIsDialogOpen(true);

  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Tabs />
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          {label}
        </Button>
        <CreateItemDialog
          title={label}
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
        />
      </Stack>
      <Table />
    </>
  );
};

export { Container };
