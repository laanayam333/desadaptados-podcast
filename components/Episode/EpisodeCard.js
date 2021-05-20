import Link from 'next/link';

const EpisodeCard = ({ episode }) => {
  return (
    <Link href={`/episodes/${episode.slug}`}>
      <a>
        <div className="flex justify-between items-baseline space-x-2 tw-p-lg border-b-2 border-dark">
          <h3 className="text-4xl font-subheading uppercase font-bold">
            {episode.title}
          </h3>
          <h4 className="self-end uppercase text-sm font-medium">
            ep.{episode.number}
          </h4>
        </div>
      </a>
    </Link>
  );
};

export default EpisodeCard;
