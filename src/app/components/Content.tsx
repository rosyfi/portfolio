import React from "react";

interface ContentProps {
  currentContent: string;
}

const Content: React.FC<ContentProps> = ({ currentContent }) => {
  return (
    <div>
      {currentContent === "content1" && <div>Content 1</div>}
      {currentContent === "content2" && <div>Content 2</div>}
      {currentContent === "content3" && <div>Content 3</div>}
      {currentContent === "content4" && <div>Content 4</div>}
    </div>
  );
};

export default Content;
