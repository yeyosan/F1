import React, { ReactNode, useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  getDriversRankingsBySeason,
  getTeamsRankingsBySeason,
} from "../../fetch";
import { RankingTabs, driversHeaders, teamsHeaders } from "./constants";
import { useData } from "../DataProvider";
import type { Header } from "./constants";
import type { DriverRankingData, TeamRankingData } from "../../fetch";

const Component = (): ReactNode => {
  const { selectedRankingTab, selectedSeason } = useData();

  const [rankingHeaders, setRankingHeaders] = useState<Array<Header>>([]);
  const [rankings, setRankings] = useState<
    Array<DriverRankingData | TeamRankingData>
  >([]);

  useEffect(() => {
    const isDriverTab = selectedRankingTab === RankingTabs.DRIVERS;
    const getRankingsBySeason = isDriverTab
      ? getDriversRankingsBySeason
      : getTeamsRankingsBySeason;

    const loadRankings = async () => {
      try {
        setRankingHeaders(isDriverTab ? driversHeaders : teamsHeaders);
        setRankings(await getRankingsBySeason(selectedSeason as string));
      } catch (err) {
        console.log("error", err);
      }
    };
    loadRankings();
  }, [selectedRankingTab, selectedSeason]);

  return (
    !!rankings.length &&
    !!rankingHeaders.length && (
      <Container maxWidth="md" style={{ overflow: "scroll" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {rankingHeaders.map(({ key, label, align, maxWidth }: Header) => (
                <TableCell
                  key={`header-${key}`}
                  align={align}
                  style={maxWidth ? { maxWidth } : {}}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rankings as Array<DriverRankingData | TeamRankingData>).map(
              (ranking: DriverRankingData | TeamRankingData) => (
                <TableRow key={`row-${ranking.pos}`} hover>
                  {rankingHeaders.map(
                    ({ key, align, maxWidth, isImage }: Header) => (
                      <TableCell
                        key={`${key}-${ranking.pos}`}
                        align={align}
                        style={{ maxWidth: maxWidth || "none" }}
                      >
                        {isImage ? (
                          <img src={ranking[key]} alt="team logo" width={64} />
                        ) : (
                          ranking[key]
                        )}
                      </TableCell>
                    )
                  )}
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Container>
    )
  );
};

export { Component as Table };
