const EpisodeTitle = ({ book, film }) => {
  return (
    <div className="max-w-2xl mx-auto tw-p-sm">
      <h1>
        De {book.title} a {film.title}
      </h1>
    </div>
  );
};

export default EpisodeTitle;
