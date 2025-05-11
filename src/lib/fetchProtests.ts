import { client } from '@/sanity/client';
import { urlFor } from './image';

export interface Protest {
    id: string;
    title: string;
    date: string;
    time: string;
    organizer: string;
    location: {
        city: string;
        country: string;
    };
    imageUrl: string | null;
}

export async function fetchProtests(): Promise<Protest[]> {
    const query = `*[_type == "protest"] | order(date asc) {
    _id,
    title,
    organizer,
    date,
    location,
    image
  }`;

    const data = await client.fetch(query);

    type ProtestFetchItem = {
        _id: string;
        title: string;
        organizer: string;
        date: string;
        location: { city: string; country: string };
        image?: unknown;
    };

    return data.map((item: ProtestFetchItem) => ({
        id: item._id,
        title: item.title,
        date: item.date,
        time: new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        organizer: item.organizer,
        location:{
            city: item.location.city,
            country: item.location.country
        },
        imageUrl: item.image ? (() => { const builder = urlFor(item.image); return builder ? builder.width(300).height(300).url() : null; })() : null,
    }));
}
