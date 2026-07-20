import type { ComponentProps } from 'react';

import type { Feather } from '@expo/vector-icons';

export type FeatherIconName = ComponentProps<typeof Feather>['name'];
