import React, { type ReactElement } from "react";
import { Webhook } from "lucide-react-native";

import { Integration } from "@/enums";
import { colors } from "@/theme";

import { DiscordIcon } from "./DiscordIcon";
import { GoogleDriveIcon } from "./GoogleDriveIcon";
import { NotionIcon } from "./NotionIcon";
import { OpenAIIcon } from "./OpenAIIcon";
import { SlackIcon } from "./SlackIcon";
import { XIcon } from "./XIcon";
import { YouTubeIcon } from "./YouTubeIcon";

const ICON_BY_INTEGRATION: Record<Integration, (size: number) => ReactElement> =
  {
    [Integration.Webhook]: (size) => (
      <Webhook size={size} color={colors.webhookRed} strokeWidth={2.1} />
    ),
    [Integration.Slack]: (size) => <SlackIcon size={size} />,
    [Integration.OpenAI]: (size) => <OpenAIIcon size={size} />,
    [Integration.GoogleDrive]: (size) => <GoogleDriveIcon size={size} />,
    [Integration.Discord]: (size) => <DiscordIcon size={size} />,
    [Integration.Notion]: (size) => <NotionIcon size={size} />,
    [Integration.X]: (size) => <XIcon size={size} />,
    [Integration.YouTube]: (size) => <YouTubeIcon size={size} />,
  };

export function IntegrationIcon({
  integration,
  size,
}: {
  integration: Integration;
  size: number;
}) {
  return ICON_BY_INTEGRATION[integration](size);
}
