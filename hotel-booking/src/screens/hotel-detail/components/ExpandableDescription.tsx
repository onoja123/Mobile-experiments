import { useState } from 'react';
import { Text } from 'react-native';

import { DESCRIPTION_PREVIEW_CHARS } from '../hotelDetail.constants';

type ExpandableDescriptionProps = {
  text: string;
};

export function ExpandableDescription({ text }: ExpandableDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Text className="mt-4 font-jakarta text-[13px] leading-[20px] text-muted">
      {expanded ? text : `${text.slice(0, DESCRIPTION_PREVIEW_CHARS)}…`}{' '}
      <Text
        className="font-jakarta-semibold text-ink"
        onPress={() => setExpanded((value) => !value)}
      >
        {expanded ? 'Show less' : 'Read more'}
      </Text>
    </Text>
  );
}
