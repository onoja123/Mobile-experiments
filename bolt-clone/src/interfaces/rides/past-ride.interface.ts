export interface PastRide {
  destination: string;
  completedAt: string;
  fare: string;
}

export interface PastRideListProps {
  rides: PastRide[];
}
