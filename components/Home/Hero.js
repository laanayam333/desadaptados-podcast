const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-center items-center border-b-2 border-dark">
      <div className="w-full lg:w-3/5 flex flex-col text-center tw-py-lg lg:py-0">
        <div>
          <h1 className="tw-font-heading">Desadaptados</h1>
        </div>
        <div>
          <h2 className="tw-font-subheading">Podcast de libros y cine</h2>
        </div>
      </div>

      <div className="w-full lg:w-2/5 tw-p-lg border-t-2 lg:border-t-0 lg:border-l-2 border-dark">
        <p className="tw-font-body">
          Spicy jalapeno bacon ipsum dolor amet aute cillum incididunt quis
          elit, strip steak hamburger minim turducken dolore excepteur.
        </p>
      </div>
    </section>
  );
};

export default Hero;
