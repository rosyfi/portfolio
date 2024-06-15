import React, { useState } from "react";
import MenuBar from "./MenuBar";
import About from "./content/About";
import styles from "./MainContent.module.css";

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
        return <div>Content 2</div>;
      case 3:
        return <div>Content 3</div>;
      case 4:
        return <div>Content 4</div>;
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
