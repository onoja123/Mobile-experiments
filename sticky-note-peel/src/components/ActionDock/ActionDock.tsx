import React from 'react';
import { View } from 'react-native';

import { DOCK_GAP } from '@/constants/dock';
import { NOTE_ACTIONS } from '@/constants/noteActions';
import DockButton from './DockButton';
import type { ActionDockProps } from './ActionDock.types';

export default function ActionDock({ hovered, triggered }: ActionDockProps) {
  return (
    <View
      pointerEvents="none"
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        marginTop: DOCK_GAP,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      {NOTE_ACTIONS.map((action, index) => (
        <DockButton key={action.label} index={index} hovered={hovered} triggered={triggered} />
      ))}
    </View>
  );
}
