import Head from 'next/head';

import { homeQuery } from 'lib/queries';
import { getClient, overlayDrafts } from 'lib/sanity.server';

import Hero from 'components/Home/Hero';
import EpisodeList from 'components/Episode/EpisodeList';
import Newsletter from 'components/Newsletter';

export default function Home({ allEpisodes, preview }) {
  return (
    <article>
      <Head>
        <title>Desadaptados</title>
      </Head>

      <Hero />
      {allEpisodes && <EpisodeList allEpisodes={allEpisodes} />}
      <Newsletter />
    </article>
  );
}

export async function getStaticProps({ preview = false }) {
  const allEpisodes = overlayDrafts(await getClient(preview).fetch(homeQuery));
  return {
    props: { allEpisodes, preview },
    revalidate: 1
  };
}
