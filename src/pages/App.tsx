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
      <div className="max-h-screen flex flex-col items-center justify-center w-full py-10 px-1 sm:py-10">
        <h1 className="text-2xl font-bold text-center mb-4">
          Hi, I'm Mohammadreza Heydari
        </h1>
        <div className="flex flex-col justify-center gap-2 p-4 sm:p-10">
          <p className="text-center invisible animate-blocking">
            Here is a collection of my projects
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
      </div>
    </>
  );
};

export default App;
