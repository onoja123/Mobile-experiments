import React from "react";
import { View } from "react-native";
import { Box, Plus } from "lucide-react-native";

import { IntegrationIcon } from "@/components/icons";
import { Integration } from "@/enums";
import { colors, shadows } from "@/theme";

const RAIL_TOP = 148;
const RAIL_ICON_SIZE = 20;

const RAIL_INTEGRATIONS = [
  Integration.Slack,
  Integration.OpenAI,
  Integration.Discord,
  Integration.Webhook,
  Integration.Notion,
] as const;

function RailButton({ children }: { children: React.ReactNode }) {
  return (
    <View
      className="items-center justify-center bg-white"
      style={{ width: 48, height: 48, borderRadius: 24, ...shadows.subtle }}
    >
      {children}
    </View>
  );
}

export function IntegrationRail({ scale }: { scale: number }) {
  return (
    <View
      className="absolute justify-center gap-3.5"
      style={{ left: 10, top: RAIL_TOP * scale }}
    >
      <RailButton>
        <Plus size={RAIL_ICON_SIZE} color={colors.ink} strokeWidth={2.2} />
      </RailButton>
      {RAIL_INTEGRATIONS.map((integration) => (
        <RailButton key={integration}>
          <IntegrationIcon integration={integration} size={RAIL_ICON_SIZE} />
        </RailButton>
      ))}
      <RailButton>
        <Box
          size={RAIL_ICON_SIZE}
          color={colors.ink}
          strokeWidth={2}
          fill={colors.ink}
        />
      </RailButton>
      <RailButton>
        <IntegrationIcon
          integration={Integration.GoogleDrive}
          size={RAIL_ICON_SIZE}
        />
      </RailButton>
    </View>
  );
}
