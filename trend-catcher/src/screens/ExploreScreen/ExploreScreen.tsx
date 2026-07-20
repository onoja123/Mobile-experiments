import { ScrollView } from 'react-native';

import ProfileHeader from '@/components/ProfileHeader';
import PromptField from '@/components/PromptField';
import { FEED_SECTIONS } from '@/data/feedSections';
import { PROFILE } from '@/data/profile';
import FeedSectionBlock from './components/FeedSectionBlock';

export default function ExploreScreen() {
  return (
    <>
      <ProfileHeader profile={PROFILE} />
      <PromptField />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-36">
        {FEED_SECTIONS.map((section) => (
          <FeedSectionBlock key={section.id} section={section} />
        ))}
      </ScrollView>
    </>
  );
}
