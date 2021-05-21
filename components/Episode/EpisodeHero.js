import Image from 'next/image';

import AudioPlayer from 'components/AudioPlayer';

const EpisodeHero = ({ episode }) => {
  console.log(JSON.stringify(episode, null, 2));

  const bookYear = episode.book.year.split('-')[0];
  const filmYear = episode.film.year.split('-')[0];

  return (
    <section className="flex flex-col lg:flex-row border-b-2 border-dark">
      <div className="block lg:hidden tw-p-lg">
        <AudioPlayer audioFile={episode.audioFile} />
      </div>

      <div className="w-full lg:w-1/4 lg:border-r-2 border-t-2 lg:border-t-0 lg:border-b-0 border-dark">
        <div className="flex flex-row lg:flex-col justify-between lg:justify-center lg:items-start text-left h-1/3 border-b-2 border-dark tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Book</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{episode.book.title}</h5>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col justify-between lg:justify-center lg:items-start text-left h-1/3 border-b-2 border-dark tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Author</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{episode.book.author}</h5>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col justify-between lg:justify-center lg:items-start text-left h-1/3 tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Year</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{bookYear}</h5>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/4 order-first lg:order-none">
        {episode.coverImage && (
          <div className="relative w-full h-96 border-b-2 lg:border-b-0 border-dark">
            <Image
              src={episode.coverImage}
              alt="asdasd"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/4 lg:border-l-2 border-t-2 lg:border-t-0 border-dark">
        <div className="flex flex-row-reverse lg:flex-col justify-between lg:justify-center lg:items-end text-right h-1/3 border-b-2 border-dark tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Film</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{episode.film.title}</h5>
          </div>
        </div>

        <div className="flex flex-row-reverse lg:flex-col justify-between lg:justify-center lg:items-end text-right h-1/3 border-b-2 border-dark tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Author</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{episode.film.director}</h5>
          </div>
        </div>

        <div className="flex flex-row-reverse lg:flex-col justify-between lg:justify-center lg:items-end text-right h-1/3 tw-p-sm">
          <div className="w-1/3 lg:w-full">
            <h4 className="tw-font-body font-bold">Year</h4>
          </div>
          <div>
            <h5 className="tw-font-subheading">{filmYear}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodeHero;
