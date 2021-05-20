// import Avatar from '../components/avatar'
// import Date from '../components/date'
// import CoverImage from './cover-image'
import Link from 'next/link';

export default function EpisodePreview({
  title,
  // coverImage,
  // date,
  // author,
  slug
}) {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage slug={slug} title={title} image={coverImage} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/episodes/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      {/* <div className="text-lg mb-4">
        <Date dateString={date} />
      </div> */}
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  );
}
