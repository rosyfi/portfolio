import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Content from "./Content";

interface MainWindowProps {
  onPathChange: (path: string) => void;
}

const MainWindow: React.FC<MainWindowProps> = ({ onPathChange }) => {
  const [currentContent, setCurrentContent] = useState<number>(1);

  const handleMenuItemClick = (newContent: number, newPath: string) => {
    setCurrentContent(newContent);
    onPathChange(newPath);
  };

  const renderContent = () => {
    switch (currentContent) {
      case 1:
        return <Content />;
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
    <div>
      <MenuBar onMenuItemClick={handleMenuItemClick} />
      {renderContent()}
    </div>
  );
};

export default MainWindow;
