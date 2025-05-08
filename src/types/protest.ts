export interface Protest {
  _id: string;
  title: string;
  organizer: string;
  date: string; // ISO date string from Sanity
  location: {
    city: string;
    country?: string;
  };
  image?: {
    asset?: {
      url?: string;
    };
  };
}
