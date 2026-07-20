export interface UserProfile {
  initials: string;
  fullName: string;
  rating: string;
  phone: string;
}

export interface ProfileHeaderProps {
  profile: UserProfile;
}
