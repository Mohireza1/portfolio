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
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="grid p-4 grid-cols-2 sm:p-20 animate-gap-open scale-20 max-w-150 sm:animate-gap-open-wide">
          <Section title="About Me" bwSrc={about} clrSrc={aboutClr} />
          <Section title="Frontend Projects" bwSrc={front} clrSrc={frontClr} />
          <Section title="DL Projects" bwSrc={ai} clrSrc={aiClr} />
          <Section title="Hardware" bwSrc={hardware} clrSrc={hardwareClr} />
        </div>
      </div>
    </>
  );
};

export default App;
