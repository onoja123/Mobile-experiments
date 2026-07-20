import React from "react";
import { ScrollView, Text, View } from "react-native";

import { MenuButton } from "@/components/MenuButton";
import { Screen } from "@/components/Screen";
import { SearchButton } from "@/components/SearchButton";
import { TEMPLATE_FILTERS, TEMPLATES } from "@/data/templates";

import { TemplateCard } from "./components/TemplateCard";
import { TemplateFilterChip } from "./components/TemplateFilterChip";

export function TemplatesScreen() {
  return (
    <Screen>
      <View className="flex-row items-center justify-between px-4 pt-2">
        <MenuButton />
        <SearchButton />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <Text className="mt-6 px-5 font-jost-light text-[34px] leading-[42px] text-ink">
          Start <Text className="font-jost-bold">Automating</Text> in{"\n"}
          Minutes <Text className="font-jost-bold">with</Text> Ready-{"\n"}Made{" "}
          <Text className="font-jost-bold">Templates</Text>
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-6"
          contentContainerClassName="gap-3 px-4"
        >
          {TEMPLATE_FILTERS.map((filter) => (
            <TemplateFilterChip key={filter.label} filter={filter} />
          ))}
        </ScrollView>

        <View className="mt-6 gap-4 px-4">
          {TEMPLATES.map((template) => (
            <TemplateCard key={template.title} template={template} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}
