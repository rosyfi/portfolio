import styles from "../styles/MainContent.module.css";
import MenuBar from "./MenuBar";
import About from "./content/about/About";
import Education from "./content/education/Education";
import Experience from "./content/experience/Experience";
import HardSkill from "./content/skill/hard/HardSkill";
import SoftSkill from "./content/skill/soft/SoftSkill";
import Resume from "./content/resume/Resume";

interface MainContentProps {
  currentContent: number;
  setCurrentContent: (content: number) => void;
  onPathChange: (path: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  onPathChange,
  currentContent,
  setCurrentContent,
}) => {
  const handleMenuItemClick = (newContent: number) => {
    setCurrentContent(newContent);
  };

  const renderContent = () => {
    switch (currentContent) {
      case 1:
        onPathChange("rossellafilocomo/contact");
        return <About />;
      case 2:
        onPathChange("rossellafilocomo/education");
        return <Education />;
      case 3:
        onPathChange("rossellafilocomo/experience");
        return <Experience />;
      case 4:
        onPathChange("rossellafilocomo/skills/hard");
        return <HardSkill />;
      case 5:
        onPathChange("rossellafilocomo/skills/soft");
        return <SoftSkill />;
      case 6:
        onPathChange("rossellafilocomo/skills/language");
        return (
          <div style={{ alignContent: "center" }}>
            <div style={{ textAlign: "center" }}>Under construction :)</div>
          </div>
        );
      case 7:
        onPathChange("rossellafilocomo/resume");
        return <Resume />;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      {currentContent != 7 && currentContent != 1 && (
        <MenuBar onMenuItemClick={handleMenuItemClick} />
      )}
      {renderContent()}
    </div>
  );
};

export default MainContent;
