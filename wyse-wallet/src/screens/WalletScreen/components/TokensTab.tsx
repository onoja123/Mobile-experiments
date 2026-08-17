import { View } from 'react-native';

import { tokens } from '@/data/tokens';
import AllocationBar from './AllocationBar';
import TokenRow from './TokenRow';

export default function TokensTab() {
  return (
    <View>
      <AllocationBar />
      <View className="mt-2 px-5">
        {tokens.map((token, index) => (
          <TokenRow key={token.id} token={token} index={index} />
        ))}
      </View>
    </View>
  );
}
