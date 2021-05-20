import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { urlForImage, usePreviewSubscription } from 'lib/sanity';
import { sanityClient, getClient, overlayDrafts } from 'lib/sanity.server';
import { episodeQuery, episodeSlugsQuery } from 'lib/queries';

import SectionSeparator from 'components/Shared/SectionSeparator';
import MoreEpisodes from 'components/Episode/MoreEpisodes';
import EpisodeTitle from 'components/Episode/EpisodeTitle';
import EpisodeBody from 'components/Episode/EpisodeBody';
import EpisodeHero from 'components/Episode/EpisodeHero';
import AudioPlayer from 'components/AudioPlayer';

export default function Episode({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.episode?.slug;

  const {
    data: { episode, moreEpisodes }
  } = usePreviewSubscription(episodeQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug
  });

  if (!router.isFallback && !episode) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    // <Layout preview={preview}>

    <>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article className="overflow-x-hidden">
            <Head>
              <title>{episode.title} | Desadaptados</title>
              {episode.coverImage && (
                <meta
                  key="ogImage"
                  property="og:image"
                  content={urlForImage(episode.coverImage)
                    .width(1200)
                    .height(627)
                    .fit('crop')
                    .url()}
                />
              )}
            </Head>
            <section>
              <EpisodeHero episode={episode} />
              <div className="flex items-center justify-center">
                <div className="hidden lg:block w-full border-b-2 border-dark tw-p-lg">
                  <AudioPlayer audioFile={episode.audioFile} />
                </div>
              </div>

              <EpisodeTitle book={episode.book} film={episode.film} />

              <EpisodeBody body={episode.body} />
            </section>
          </article>

          <SectionSeparator />
          {moreEpisodes.length > 0 && <MoreEpisodes episodes={moreEpisodes} />}
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { episode, moreEpisodes } = await getClient(preview).fetch(
    episodeQuery,
    {
      slug: params.slug
    }
  );

  return {
    props: {
      preview,
      data: {
        episode,
        moreEpisodes: overlayDrafts(moreEpisodes)
      }
    }
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(episodeSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
