import React from "react";
import { ScrollView, Text, View } from "react-native";

import { Screen } from "@/components/Screen";
import { WorkspaceHeader } from "@/components/WorkspaceHeader";
import { ORGANIZATION_TABS, USAGE_METRICS } from "@/data/organizationUsage";

import { OrganizationTabs } from "./components/OrganizationTabs";
import { UsageCard } from "./components/UsageCard";

export function OrganizationScreen() {
  return (
    <Screen>
      <WorkspaceHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <Text className="mt-6 px-5 font-jost-light text-[34px] text-ink">
          My <Text className="font-jost-bold">Organization</Text>
        </Text>

        <OrganizationTabs tabs={ORGANIZATION_TABS} activeIndex={0} />

        <View className="mt-6 gap-4 px-4">
          {USAGE_METRICS.map((metric) => (
            <UsageCard key={metric.title} metric={metric} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
