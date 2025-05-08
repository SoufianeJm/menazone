import { client } from '@/sanity/client';

export async function fetchProtests() {
    return client.fetch(`
    *[_type == "protest"] | order(date desc) {
      _id,
      title,
      organizer,
      date,
      location {
        city,
        country
      },
      image {
        asset->{
          _id,
          url
        }
      }
    }
  `);
}
