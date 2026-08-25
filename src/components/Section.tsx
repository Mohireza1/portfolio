type props = { title: string; bwSrc: string; clrSrc: string };

const Section = ({ title, bwSrc, clrSrc }: props) => {
  return (
    <section className="gridi place-items-center cursor-pointer">
      <div className="relative group inline-block border-2 border-gray-800 rounded-xl overflow-hidden">
        <img
          src={bwSrc}
          alt="Black and white"
          className="block w-full h-auto"
        />

        <img
          src={clrSrc}
          alt="Colored"
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-250 ease-linear [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0)]"
        />
      </div>
      <h2 className="text-center font-medium text-lg sm:text-3xl mt-1">
        {title}
      </h2>
    </section>
  );
};

export default Section;
