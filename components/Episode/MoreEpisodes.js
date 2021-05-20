import EpisodePreview from 'components/Episode/EpisodePreview';

export default function MoreEpisodes({ episodes }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Episodes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {episodes.map((episode) => (
          <EpisodePreview
            key={episode.slug}
            title={episode.title}
            coverImage={episode.coverImage}
            slug={episode.slug}
          />
        ))}
      </div>
    </section>
  );
}
