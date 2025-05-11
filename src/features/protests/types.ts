export interface SanityImage {
    asset: {
        _id: string;
        url: string;
    };
}

export interface SanityLocation {
    city: string;
    country: string;
}

export interface SanityProtest {
    id: string;
    title: string;
    date: string;
    time: string;
    organizer: string;
    location: SanityLocation;
    imageUrl: string | null;
}
