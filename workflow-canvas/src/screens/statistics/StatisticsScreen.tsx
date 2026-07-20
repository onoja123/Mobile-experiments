import React from "react";
import { ScrollView } from "react-native";

import { Screen } from "@/components/Screen";
import { WorkspaceHeader } from "@/components/WorkspaceHeader";

import { ChartLegend } from "./components/ChartLegend";
import { RecommendationsPanel } from "./components/RecommendationsPanel";
import { StatisticsChartCard } from "./components/StatisticsChartCard";

export function StatisticsScreen() {
  return (
    <Screen>
      <WorkspaceHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <StatisticsChartCard />
        <ChartLegend />
        <RecommendationsPanel />
      </ScrollView>
    </Screen>
  );
}
