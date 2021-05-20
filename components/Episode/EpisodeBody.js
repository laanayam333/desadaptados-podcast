import BlockContent from '@sanity/block-content-to-react';

const EpisodeBody = ({ body }) => {
  return (
    <div className="max-w-2xl mx-auto tw-p-sm">
      <BlockContent
        blocks={body}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      />
    </div>
  );
};

export default EpisodeBody;
