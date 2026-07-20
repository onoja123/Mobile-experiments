import { ScrollView, Text } from 'react-native';
import { USER_PROFILE } from '@/data/userProfile';
import { useTabScreenPadding } from '@/hooks/useTabScreenPadding';
import MenuRow from './components/MenuRow';
import MenuSection from './components/MenuSection';
import ProfileHeader from './components/ProfileHeader';
import PromotionsRow from './components/PromotionsRow';
import SignOutRow from './components/SignOutRow';

export default function AccountScreen() {
  const contentPadding = useTabScreenPadding();

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={contentPadding}
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-[32px] font-extrabold tracking-tight text-ink">Account</Text>

      <ProfileHeader profile={USER_PROFILE} />

      <MenuSection>
        <MenuRow icon="card-outline" label="Payment methods" />
        <PromotionsRow />
        <MenuRow icon="time-outline" label="Ride history" />
      </MenuSection>

      <MenuSection>
        <MenuRow icon="shield-checkmark-outline" label="Safety" />
        <MenuRow icon="help-buoy-outline" label="Support" />
        <MenuRow icon="settings-outline" label="Settings" />
      </MenuSection>

      <MenuSection>
        <SignOutRow />
      </MenuSection>

      <Text className="mt-8 text-center text-[13px] text-muted">Version 1.0.0</Text>
    </ScrollView>
  );
}
