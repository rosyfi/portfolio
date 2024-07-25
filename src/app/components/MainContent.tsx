import React, { useState } from "react";
import styles from "../styles/MainContent.module.css";
import MenuBar from "./MenuBar";
import About from "./content/about/About";
import Education from "./content/education/Education";
import Experience from "./content/experience/Experience";
import HardSkill from "./content/skill/hard/HardSkill";
import SoftSkill from "./content/skill/soft/SoftSkill";

interface MainContentProps {
  onPathChange: (path: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onPathChange }) => {
  const [currentContent, setCurrentContent] = useState<number>(1);

  const handleMenuItemClick = (newContent: number, newPath: string) => {
    setCurrentContent(newContent);
    onPathChange(newPath);
  };

  const renderContent = () => {
    switch (currentContent) {
      case 1:
        return <About />;
      case 2:
        return <Education />;
      case 3:
        return <Experience />;
      case 4:
        return <HardSkill />;
      case 5:
        return <SoftSkill />;
      case 6:
        return <div>Content 6???????</div>;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <MenuBar onMenuItemClick={handleMenuItemClick} />
      {renderContent()}
    </div>
  );
};

export default MainContent;
