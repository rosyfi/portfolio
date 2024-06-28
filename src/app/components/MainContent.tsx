import React, { useState } from "react";
import MenuBar from "./MenuBar";
import About from "./content/About";
import styles from "./styles/MainContent.module.css";
import Education from "./content/Education";
import Experience from "./content/Experience";

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
        return <div>Content 4</div>;
      case 5:
        return <div>Content 5!!!!!!!!</div>;
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
