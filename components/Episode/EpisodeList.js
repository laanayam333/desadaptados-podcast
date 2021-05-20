import EpisodeCard from 'components/Episode/EpisodeCard';

const EpisodeList = ({ allEpisodes }) => {
  return (
    <div>
      <h2 className="tw-p-sm border-b-2 border-dark tw-font-subheading">
        Episodes
      </h2>
      {allEpisodes.map((episode) => (
        <EpisodeCard key={episode._id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;
