type props = { title: string; bwSrc: string; clrSrc: string };

const Section = ({ title, bwSrc, clrSrc }: props) => {
  return (
    <section className="cursor-pointer flex flex-col items-center">
      <div
        className="
      relative group border-4 sm:border-0 border-gray-100 rounded-xl overflow-hidden sm:overflow-visible max-w-30 xs:max-w-45

      sm:before:absolute sm:before:w-[105%] sm:before:h-[107%] sm:before:border-2 sm:before:border-gray-100 sm:before:-top-3 sm:before:-left-2 md:before:-left-2.5 before:rounded-xl

      sm:after:absolute sm:after:w-[105%] sm:after:h-[107%] sm:after:border-2 after:border-gray-100 after:-bottom-3 after:rounded-xl"
      >
        <img
          src={bwSrc}
          alt="Black and white"
          className=" block w-full h-auto sm:rounded-tl-xl sm:rounded-br-xl"
        />

        <img
          src={clrSrc}
          alt="Colored"
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-75 sm:duration-150 ease-linear [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0)] group-active:[clip-path:inset(0)] sm:rounded-tl-xl sm:rounded-br-xl"
        />
      </div>
      <h2 className="invisible text-center font-medium text-sm sm:text-lg mt-1 sm:mt-6 animate-blocking-2">
        {title}
      </h2>
    </section>
  );
};

export default Section;
