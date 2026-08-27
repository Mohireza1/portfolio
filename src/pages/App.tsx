import Section from "../components/Section";

// About
import about from "../assets/section-icons/about.webp";
import aboutClr from "../assets/section-icons/about_color.webp";

// Front
import front from "../assets/section-icons/front.webp";
import frontClr from "../assets/section-icons/front_color.webp";

// AI
import ai from "../assets/section-icons/ai.webp";
import aiClr from "../assets/section-icons/ai_color.webp";

// Hardware
import hardware from "../assets/section-icons/hardware.webp";
import hardwareClr from "../assets/section-icons/hardware_color.webp";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center w-full py-10 px-1 sm:py-10 relative">
        <h1 className="text-xl sm:text-3xl font-bold text-center mb-4">
          Hi, I'm Mohammadreza Heydari
        </h1>
        <div className="flex flex-col justify-center gap-2 p-4 sm:p-10">
          <p className="text-sm sm:text-lg text-center invisible animate-blocking-1">
            Here is a everything you need to know about me
          </p>
          <div className="grid grid-cols-2 my-2 sm:mt-8 animate-gap-open scale-20 max-w-90 sm:max-w-120 sm:animate-gap-open-wide">
            <Section title="About Me" bwSrc={about} clrSrc={aboutClr} />
            <Section
              title="Frontend Projects"
              bwSrc={front}
              clrSrc={frontClr}
            />
            <Section title="DL Projects" bwSrc={ai} clrSrc={aiClr} />
            <Section title="Hardware" bwSrc={hardware} clrSrc={hardwareClr} />
          </div>
        </div>
        <div className="absolute bottom-4 w-10 sm:w-12 invisible animate-blocking-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="group max-w-12 animate-bounce cursor-pointer"
          >
            <path
              d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="16px"
              className="group-hover:fill-white group-active:fill-white"
            />
            <path
              d="M176 262.62 256 342l80-79.38M256 330.97V170"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16px"
              className="group-hover:stroke-gray-600 group-active:stroke-gray-600"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default App;
