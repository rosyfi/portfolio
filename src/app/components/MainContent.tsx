import React, { useState } from "react";
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
        return <div style={{ textAlign: "center" }}>Under construction :)</div>;
      case 7:
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
