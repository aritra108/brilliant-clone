import Footer from "../components/Footer";
import Overview from "../components/Overview";
import Section from "../components/Section";
import { sections } from "../data";

const PraticeLogic = () => {
  return (
    <div className="practiceLogic">
      <Overview />

      {sections.map((section) => (
        <Section
          key={section.index}
          index={section.index}
          title={section.title}
          excerpt={section.excerpt}
          cards={section.cards}
        />
      ))}

      <Footer />
    </div>
  );
};

export default PraticeLogic;
