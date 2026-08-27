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
      <div className="max-h-screen overflow-hidden flex flex-col items-center justify-center w-full px-2 py-8 sm:p-30">
        <h1 className="text-2xl font-bold text-center">
          Hi, I'm Mohammadreza Heydari
        </h1>
        <div className="flex flex-col justify-center gap-2 p-4 sm:p-10">
          <p className="text-center">Here is a collection of my projects</p>
          <div className="grid grid-cols-2 mt-4 animate-gap-open scale-20 max-w-120 sm:animate-gap-open-wide">
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
      </div>
    </>
  );
};

export default App;
