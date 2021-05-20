import { groq } from 'next-sanity';

const episodeFields = `
  _id,
  'slug': slug.current,
   title,
   book,
   film,
   number,
   body,
   'coverImage': coverImage.asset->url,
   'audioFile': file.asset -> url
 `;

export const homeQuery = groq`
*[_type == "episode"] | order(date desc, _updatedAt desc) {
  ${episodeFields}
}`;

export const episodeQuery = groq`
{
  "episode": *[_type == "episode" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    ${episodeFields}
  },
  "moreEpisodes": *[_type == "episode" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    ${episodeFields}
  }
}`;

export const episodeSlugsQuery = groq`
*[_type == "episode" && defined(slug.current)][].slug.current
`;

export const episodeBySlugQuery = groq`
*[_type == "episode" && slug.current == $slug][0] {
  ${episodeFields}
}`;
