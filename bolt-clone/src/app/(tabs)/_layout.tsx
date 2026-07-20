import { Tabs } from 'expo-router';
import TabBar from '@/components/TabBar';
import { TAB_KEY_BY_ROUTE, TAB_ROUTE_BY_KEY } from '@/constants/routes';
import { TabKey } from '@/enums';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={({ state, navigation }) => (
        <TabBar
          active={TAB_KEY_BY_ROUTE[state.routes[state.index].name] ?? TabKey.HOME}
          onSelect={(tab) => navigation.navigate(TAB_ROUTE_BY_KEY[tab])}
        />
      )}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rides" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}
