import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Content from "./Content";

interface MainWindowProps {
  updatePath: (newPath: string) => void;
}

const MainWindow: React.FC<MainWindowProps> = ({ updatePath }) => {
  const [currentContent, setCurrentContent] = useState("content1");

  const updateContent = (newContent: string) => {
    setCurrentContent(newContent);
  };

  return (
    <div>
      <MenuBar updatePath={updatePath} updateContent={updateContent} />
      <Content currentContent={currentContent} />
    </div>
  );
};

export default MainWindow;
