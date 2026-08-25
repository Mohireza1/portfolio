import Section from "../components/Section";

// About
import about from "../assets/section-icons/about.png";
import aboutClr from "../assets/section-icons/about_color.png";

// Front
import front from "../assets/section-icons/front.png";
import frontClr from "../assets/section-icons/front_color.png";

// AI
import ai from "../assets/section-icons/ai.png";
import aiClr from "../assets/section-icons/ai_color.png";

// Hardware
import hardware from "../assets/section-icons/hardware.png";
import hardwareClr from "../assets/section-icons/hardware_color.png";

const App = () => {
  return (
    <>
      <div className="min-h-screen flex items-center">
        <div className="grid p-2 gap-4 grid-cols-2 ">
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
